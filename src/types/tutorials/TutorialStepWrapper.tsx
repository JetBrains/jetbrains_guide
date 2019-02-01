/*

HOC to wrap a resource, extracting and flattening the
page query data into a references map and well-structured
resource objects. Mainly to get author information.

 */

import { join, resolve } from 'path';
import React from 'react';
import { IListingCategoryItem } from '../../components/ListingWrapper';
import { IAuthorEdges } from '../authors/models';
import { ITechnologyEdges } from '../technologies/models';
import { ITopicEdges } from '../topics/models';
import { ITutorialEdges, ITutorialNode, ITutorialStepEdges } from './models';

export interface ITutorialStepWrapperProps {
  data: {
    resource: ITutorialNode;
    tutorials: { edges: ITutorialEdges };
    tutorialsteps: { edges: ITutorialStepEdges };
    authors: { edges: IAuthorEdges };
    technologies: { edges: ITechnologyEdges };
    topics: { edges: ITopicEdges };
  };
}

const TutorialStepWrapper = (Component: any) => ({
  data: { resource, tutorials, tutorialsteps, authors, technologies, topics }
}: ITutorialStepWrapperProps) => {
  const resourceNode = { ...resource.frontmatter, slug: resource.fields.slug, excerpt: resource.excerpt, html: resource.html };

  // Get all the metadata
  const references: { [s: string]: { [s: string]: IListingCategoryItem } } = {
    authors: {},
    technologies: {},
    topics: {},
    tutorials: {},
    tutorialsteps: {}
  };

  authors.edges.map(edge => {
    references.authors[edge.node.frontmatter.label] = {
      title: edge.node.frontmatter.title,
      slug: edge.node.fields.slug,
      headshot: edge.node.frontmatter.headshot
    };
  });
  technologies.edges.map(edge => {
    references.technologies[edge.node.frontmatter.label] = { label: edge.node.frontmatter.label, slug: edge.node.fields.slug };
  });
  topics.edges.map(edge => {
    references.topics[edge.node.frontmatter.label] = { label: edge.node.frontmatter.label, slug: edge.node.fields.slug };
  });
  tutorials.edges.map(edge => {
    references.tutorials[edge.node.fields.slug] = {
      title: edge.node.frontmatter.title,
      slug: edge.node.fields.slug,
      steps: edge.node.frontmatter.steps
    };
  });
  tutorials.edges.map(edge => {
    references.tutorials[edge.node.fields.slug] = {
      title: edge.node.frontmatter.title,
      slug: edge.node.fields.slug,
      steps: edge.node.frontmatter.steps
    };
  });
  tutorialsteps.edges.map(edge => {
    references.tutorialsteps[edge.node.fields.slug] = {
      title: edge.node.frontmatter.title,
      slug: edge.node.fields.slug
    };
  });

  // Get the flattened author
  const thisAuthor = references.authors[resourceNode.author];

  // Flatten the tutorialstep
  const thisTutorialStep = {
    ...resourceNode,
    author: thisAuthor
  };

  // Now get the tutorial
  const parentSlug = `${resolve(resourceNode.slug, '..')}/`;
  const parentTutorial = references.tutorials[parentSlug];
  const tutorial = {
    title: 'Some Tutorial',
    slug: parentSlug,
    steps: parentTutorial.steps
      ? parentTutorial.steps.map(step => {
          const fullStepSlug = join(parentSlug, `${step}/`);
          const tutorialStep = references.tutorialsteps[fullStepSlug];
          return { slug: fullStepSlug, label: tutorialStep.title };
        })
      : []
  };

  return <Component resource={thisTutorialStep} tutorial={tutorial} />;
};

export default TutorialStepWrapper;

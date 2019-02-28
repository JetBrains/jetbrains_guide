/*

HOC to wrap a resource, extracting and flattening the
page query data into a references map and well-structured
resource objects. Mainly to get author information.

 */

import { join } from 'path';
import React from 'react';
import { IListingCategoryItem } from '../../components/ListingWrapper';
import { IResourceCardProps } from '../../components/ResourceCard';
import { IAuthorEdge, IAuthorEdges } from '../authors/models';
import { ITechnologyEdges } from '../technologies/models';
import { ITopicEdges } from '../topics/models';
import { ITutorialNode, ITutorialStepEdges, ITutorialStepNode } from './models';

export interface ITutorialWrapperProps {
  data: {
    resource: ITutorialNode;
    tutorialsteps: { edges: ITutorialStepEdges };
    authors: { edges: IAuthorEdges };
    technologies: { edges: ITechnologyEdges };
    topics: { edges: ITopicEdges };
  };
}

const TutorialWrapper = (Component: any) => ({
  data: { resource, tutorialsteps, authors, technologies, topics }
}: ITutorialWrapperProps) => {
  const resourceNode = {
    ...resource.frontmatter,
    excerpt: resource.excerpt,
    html: resource.html
  };

  const authorEdge: IAuthorEdge | undefined = authors.edges.find(edge => edge.node.frontmatter.label === resource.frontmatter.author);
  const author = authorEdge
    ? {
        ...authorEdge.node.frontmatter,
        slug: authorEdge.node.fields.slug
      }
    : undefined;

  // Get all the metadata
  const references: { [s: string]: { [s: string]: IListingCategoryItem } } = {
    authors: {},
    technologies: {},
    topics: {},
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
    references.technologies[edge.node.frontmatter.label] = {
      label: edge.node.frontmatter.label,
      slug: edge.node.fields.slug
    };
  });
  topics.edges.map(edge => {
    references.topics[edge.node.frontmatter.label] = {
      label: edge.node.frontmatter.label,
      slug: edge.node.fields.slug
    };
  });

  const flattenedTutorialSteps: { [s: string]: ITutorialStepNode } = {};
  tutorialsteps.edges.map(edge => {
    flattenedTutorialSteps[edge.node.fields.slug] = edge.node;
  });

  const flattenedResources: IResourceCardProps[] = resourceNode.steps.map(step => {
    const fullStepSlug = join(resource.fields.slug, step, '/');
    const node = flattenedTutorialSteps[fullStepSlug];
    return {
      title: node.frontmatter.title,
      subtitle: node.frontmatter.subtitle,
      slug: node.fields.slug,
      thumbnail: node.frontmatter.thumbnail,
      author: references.authors[node.frontmatter.author],
      technologies: node.frontmatter.technologies.map(t => references.technologies[t]),
      topics: node.frontmatter.topics.map(t => references.topics[t])
    };
  });

  return <Component resource={resourceNode} author={author} tutorialSteps={flattenedResources} />;
};

export default TutorialWrapper;

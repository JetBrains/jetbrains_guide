/*

HOC to wrap the listings, extracting and flattening the 
page query data into a references map and well-structured 
resource and resources objects.

 */

import React from 'react';
import { IBaseCategoryNode, IBaseResourceEdge, IBaseResourceEdges, IBaseResourceNode } from '../types/base_models';
import { ITechnologyEdges } from '../types/technologies/models';
import { ITopicEdges } from '../types/topics/models';
import { IResourceCardProps } from './ResourceCard';

export interface IListingWrapperProps {
  data: {
    resource: IBaseResourceNode | IBaseCategoryNode;
    resources: { edges: IBaseResourceEdges };
    technologies: { edges: ITechnologyEdges };
    topics: { edges: ITopicEdges };
  };
}

export interface IListingCategoryItem {
  label: string;
  slug: string;
}

const ListingWrapper = (Component: any) => ({ data: { resource, resources, technologies, topics } }: IListingWrapperProps) => {
  const resourceNode = {
    ...resource.frontmatter,
    excerpt: resource.excerpt,
    html: resource.html
  };

  const references: { [s: string]: { [s: string]: IListingCategoryItem } } = {
    authors: {},
    technologies: {},
    topics: {}
  };

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

  const flattenedResources: IResourceCardProps[] = resources.edges.map(({ node }: IBaseResourceEdge) => {
    return {
      title: node.frontmatter.title,
      subtitle: node.frontmatter.subtitle,
      slug: node.fields.slug,
      thumbnail: node.frontmatter.thumbnail,
      technologies: node.frontmatter.technologies.map(t => references.technologies[t]),
      topics: node.frontmatter.topics.map(t => references.topics[t])
    };
  });
  return <Component resource={resourceNode} resources={flattenedResources} />;
};

export default ListingWrapper;

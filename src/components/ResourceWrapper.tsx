/*

HOC to wrap a resource, extracting and flattening the
page query data into a references map and well-structured
resource objects. Mainly to get author information.

 */

import React from 'react';
import { IAuthorEdge, IAuthorEdges } from '../types/authors/models';
import { IBaseResourceNode } from '../types/base_models';

export interface IResourceWrapperProps {
  location: {
    search: string;
  };
  data: {
    resource: IBaseResourceNode;
    authors: { edges: IAuthorEdges };
  };
}

const ResourceWrapper = (Component: any) => ({ data: { resource, authors }, location }: IResourceWrapperProps) => {
  const search = location.search ? location.search.substring(1) : null;
  const resourceNode = {
    ...resource.frontmatter,
    slug: resource.fields.slug,
    excerpt: resource.excerpt,
    slug: resource.fields.slug,
    html: resource.html
  };

  const authorEdge: IAuthorEdge | undefined = authors.edges.find(edge => edge.node.frontmatter.label === resource.frontmatter.author);
  const author = authorEdge
    ? {
        ...authorEdge.node.frontmatter,
        slug: authorEdge.node.fields.slug
      }
    : undefined;
  return <Component resource={resourceNode} author={author} search={search} />;
};

export default ResourceWrapper;

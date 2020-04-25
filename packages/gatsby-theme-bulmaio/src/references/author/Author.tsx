import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import SidebarLayout from 'gatsby-theme-bulmaio/src/components/layout/SidebarLayout';
import { Resource } from '../../resources/models';

export interface Author extends Resource {
  resources: Resource[]
}

export interface AuthorProps {
  data: {
    author: Author
  }
}

const Author: FunctionComponent<AuthorProps> = ({
                                                  data: {
                                                    author: { title, body, resources }
                                                  }
                                                }: AuthorProps) => {
  const sidebar = <div />;
  const main = <div style={{ margin: '3em' }}>
    <h1>{title}</h1>
    <MDXRenderer>{body}</MDXRenderer>
    {resources && (
      <div>
        <h2>Resources</h2>
        <ul>
          {resources.map(resource => (
            <li key={resource.slug}>
              <Link to={resource.slug}>{resource.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>;
  return (
    <SidebarLayout pageTitle={title}>
      {{ sidebar, main }}
    </SidebarLayout>
  );
};

export default Author;

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query($slug: String!) {
    author(slug: { eq: $slug }) {
    slug
    title
    body
    resources {
      slug
      title
    }
    }
  }
`;

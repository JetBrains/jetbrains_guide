import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import SidebarLayout from 'gatsby-theme-bulmaio/src/components/layout/SidebarLayout';
import { Technology2Reference } from './models';

export interface TechnologyProps {
  data: {
    technology2: Technology2Reference
  }
}

const Technology2: FunctionComponent<TechnologyProps> = ({
                                                           data: {
                                                             technology2: { title, body, resources }
                                                           }
                                                         }: TechnologyProps) => {
  const sidebar = <div />;
  const main = (
    <div style={{ margin: '3em' }}>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
      <h2>Resources</h2>
      <ul>
        {resources.map(resource => (
          <li key={resource.slug}>
            <Link to={resource.slug}>{resource.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <SidebarLayout pageTitle={title}>
      {{ sidebar, main }}
    </SidebarLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Technology2;

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query($slug: String!) {
    technology2(slug: { eq: $slug }) {
      ...ReferenceInfo
    }
  }
`;

import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import SidebarLayout from 'gatsby-theme-bulmaio/src/components/layout/SidebarLayout';
import { Tip2Resource } from './models';

export interface Tip2Props {
  data: {
    tip2: Tip2Resource
  }
}

const Tip2: FunctionComponent<Tip2Props> = (
  {
    data: {
      tip2: { author2, body, title, technologies2, topics2 }
    }
  }) => {

  const sidebar = <div />;
  const main = (
    <div style={{ margin: '3em' }} className={'content'}>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
      <h2>Author</h2>
      <p>
        <Link to={author2.slug}>{author2.title}</Link>
      </p>
      <h2>Technologies</h2>
      <ul>
        {technologies2.map(technology => (
          <li key={technology.slug}>
            <Link to={technology.slug}>{technology.title}</Link>
          </li>
        ))}
      </ul>
      <h2>Topics</h2>
      <ul>
        {topics2.map(topic => (
          <li key={topic.slug}>
            <Link to={topic.slug}>{topic.title}</Link>
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
export default Tip2;

export const query = graphql`
  query($slug: String!) {
    tip2(slug: { eq: $slug }) {
      ...ResourceInfo
    }
  }
`;

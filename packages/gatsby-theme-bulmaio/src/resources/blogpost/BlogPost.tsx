import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import SidebarLayout from 'gatsby-theme-bulmaio/src/components/layout/SidebarLayout';
import { BlogPostResource } from './models';

export interface BlogPostProps {
  data: {
    blogPost: BlogPostResource
  }
}

const BlogPost: FunctionComponent<BlogPostProps> = ({
                                                      data: {
                                                        blogPost: { author2, body, title, topics2 }
                                                      }
                                                    }: BlogPostProps) => {

  const sidebar = <div/>;
  const main = (
    <div style={{ margin: '3em' }}>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
      <h2>Author</h2>
      <p>
        <Link to={author2.slug}>{author2.title}</Link>
      </p>
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
export default BlogPost;

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query($slug: String!) {
    blogPost(slug: { eq: $slug }) {
      ...ResourceInfo
    }
  }
`;

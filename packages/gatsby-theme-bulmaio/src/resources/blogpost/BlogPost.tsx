import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../../components2/Layout';
import { BlogPostResource } from './models';

export interface BlogPostProps {
  data: {
    blogPost: BlogPostResource
  }
}

const BlogPost: FunctionComponent<BlogPostProps> = ({
                                                      data: {
                                                        blogPost: { author, body, title, topics }
                                                      }
                                                    }: BlogPostProps) => {
  return (
    <Layout>
      <div style={{ margin: '3em' }}>
        <h1>{title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
        <h2>Author</h2>
        <p>
          <Link to={author.slug}>{author.title}</Link>
        </p>
        <h2>Topics</h2>
        <ul>
          {topics.map(topic => (
            <li key={topic.slug}>
              <Link to={topic.slug}>{topic.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
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

import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import SidebarLayout from '../../components/layout/SidebarLayout';
import { BlogPostResource } from './models';

export interface BlogPostProps {
  data: {
    blogPost: BlogPostResource
  }
}

const BlogPost: FunctionComponent<BlogPostProps> = ({
                                                      data: {
                                                        blogPost: { author, body, title, technologies2, topics2 }
                                                      }
                                                    }: BlogPostProps) => {

  const sidebar = <div/>;
  const main = (
    <div style={{ margin: '3em' }} className={'content'}>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
      <h2>Author</h2>
      <p>
        <Link to={author.slug}>{author.title}</Link>
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
export default BlogPost;

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query($slug: String!) {
    blogPost(slug: { eq: $slug }) {
      ...ResourceInfo
    }
  }
`;

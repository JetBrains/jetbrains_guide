import { resolve } from 'path';
import { GatsbyCreatePages } from './types';
import { ISlugEdge } from './models';

const createTopics: GatsbyCreatePages = async ({
                                                 graphql,
                                                 boundActionCreators
                                               }) => {
  const { createPage } = boundActionCreators;

  createPage({
      path: '/topics',
      component: resolve(`src/types/topics/Topics.tsx`)
    }
  );

  // Now create each individual page
  const allMarkdown = await graphql(`{
    allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "topic"}}}
      limit: 2000
    ) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
  `);

  const edges: ISlugEdge[] = allMarkdown.data.allMarkdownRemark.edges;
  const nodes = edges.map(({ node }) => node);

  const topicTemplate = resolve(`src/types/topics/Topic.tsx`);
  nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: resolve(__dirname, topicTemplate),
      context: {
        slug: node.fields.slug
      }
    });
  });

};

export default createTopics;

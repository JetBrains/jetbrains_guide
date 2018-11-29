import { resolve } from 'path';
import { GatsbyCreatePages } from './types';
import { ISlugEdge } from './models';

const createTutorials: GatsbyCreatePages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "tutorial" } } }, limit: 2000) {
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

  if (allMarkdown.data.allMarkdownRemark) {
    createPage({
      path: '/tutorials',
      component: resolve(`src/types/tutorials/Tutorials.tsx`)
    });

    const edges: ISlugEdge[] = allMarkdown.data.allMarkdownRemark.edges;
    const nodes = edges.map(({ node }) => node);

    const tutorialTemplate = resolve(`src/types/tutorials/Tutorial.tsx`);
    nodes.forEach(node => {
      createPage({
        path: node.fields.slug,
        component: resolve(__dirname, tutorialTemplate),
        context: {
          slug: node.fields.slug
        }
      });
    });
  }
};

export default createTutorials;

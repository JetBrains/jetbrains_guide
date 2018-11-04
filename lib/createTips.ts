import { resolve } from 'path';
import { GatsbyCreatePages } from './types';
import { ISlugEdge } from './models';

const createTips: GatsbyCreatePages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  createPage({
    path: '/tips',
    component: resolve(`src/types/tips/Tips.tsx`)
  });

  // Now create each individual page
  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "tip" } } }, limit: 2000) {
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

  const tipTemplate = resolve(`src/types/tips/Tip.tsx`);
  nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: resolve(__dirname, tipTemplate),
      context: {
        slug: node.fields.slug
      }
    });
  });
};

export default createTips;

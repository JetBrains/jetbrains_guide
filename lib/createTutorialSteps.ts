import { resolve } from 'path';
import { GatsbyCreatePages } from './types';
import { ISlugEdge } from './models';

const createTutorialSteps: GatsbyCreatePages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "tutorialstep" } } }, limit: 2000) {
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

  const tutorialstepTemplate = resolve(`src/types/tutorials/TutorialStep.tsx`);
  nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: resolve(__dirname, tutorialstepTemplate),
      context: {
        slug: node.fields.slug
      }
    });
  });
};

export default createTutorialSteps;

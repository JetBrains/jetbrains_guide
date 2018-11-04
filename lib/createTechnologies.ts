import { resolve } from 'path';
import { GatsbyCreatePages } from './types';
import { ISlugEdge } from './models';

const createTechnologies: GatsbyCreatePages = async ({
                                                       graphql,
                                                       boundActionCreators
                                                     }) => {
  const { createPage } = boundActionCreators;

  createPage({
      path: '/technologies',
      component: resolve(`src/types/technologies/Technologies.tsx`)
    }
  );

  // Now create each individual page
  const allMarkdown = await graphql(`{
    allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "technology"}}}
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

  const technologyTemplate = resolve(`src/types/technologies/Technology.tsx`);
  nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: resolve(__dirname, technologyTemplate),
      context: {
        slug: node.fields.slug
      }
    });
  });

};

export default createTechnologies;

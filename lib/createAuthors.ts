import { resolve } from 'path';
import { GatsbyCreatePages } from './types';
import { ISlugEdge } from './models';

const createAuthors: GatsbyCreatePages = async ({
                                                  graphql,
                                                  boundActionCreators
                                                }) => {
  const { createPage } = boundActionCreators;

  createPage({
      path: '/authors',
      component: resolve(`src/types/authors/Authors.tsx`)
    }
  );

  // Now create each individual page
  const allMarkdown = await graphql(`{
    allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "author"}}}
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

  const authorTemplate = resolve(`src/types/authors/Author.tsx`);
  nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: resolve(__dirname, authorTemplate),
      context: {
        slug: node.fields.slug
      }
    });
  });

};

export default createAuthors;

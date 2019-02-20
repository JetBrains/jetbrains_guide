import path from 'path';
import { GatsbyCreatePages } from './types';

const createPages: GatsbyCreatePages = async ({ graphql, boundActionCreators }, pluginOptions: any) => {
  const { createPage } = boundActionCreators;

  const configTypes = pluginOptions.types;

  // First do the "listing" pages for each type
  Object.values(configTypes).map((ct: any) => {
    if (ct.plural) {
      createPage({
        path: `/${ct.plural}`,
        component: path.resolve(ct.listing)
      });
    }
  });

  let allMarkdown: any = {};
  try {
    allMarkdown = await graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                type
              }
            }
          }
        }
      }
    `);
  } catch (error) {
    console.log('Error in createPages', error);
  }

  // Now go through all the resources and generate the page for each
  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }: any) => {
    // Get the type metadata for this page's type and use the template
    // specified in the setup

    const configType = configTypes[node.frontmatter.type];
    createPage({
      path: node.fields.slug,
      component: path.resolve(configType.item)
    });
  });
};

module.exports = createPages;

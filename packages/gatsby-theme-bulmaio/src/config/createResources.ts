/*

Create listing pages and instance pages for each type in
Markdown content, e.g. tips, tutorials, etc.

 */

import path from 'path';

interface ConfigResource {
  plural: string;
}

interface CreateResourcesProps {
  [k: string]: ConfigResource
}

const createResources = async (graphql: any, createPage: any, resources: CreateResourcesProps) => {

  // First the listings for each resource types, e.g. tips
  Object.entries(resources).map(([refName, resource]) => {

    const targetPath = `/${resource.plural.toLowerCase()}/`;
    const targetComponent = `src/templates/${resource.plural}.tsx`;
    createPage({
      path: targetPath,
      component: path.resolve(targetComponent)
    });
  });

  // Now get all the resources
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

    const thisResourceType = node.frontmatter.type;
    const singular = thisResourceType[0].toUpperCase() + thisResourceType.substring(1);
    const targetComponent = `src/templates/${singular}.tsx`;
    createPage({
      path: node.fields.slug,
      component: path.resolve(targetComponent),
    });
  });
};

export default createResources;

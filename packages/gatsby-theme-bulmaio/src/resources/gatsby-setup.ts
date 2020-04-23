import { readFileSync } from 'fs';
import path from 'path';

export const resourceTypes = {
  BlogPost: { plural: 'Blog Posts', pathname: 'blogposts' }
};

async function createListing(graphql: any, createPage: any, resourceType: string, metadata: any) {
  const allType = `all${resourceType}`;
  const allResultsData = await graphql(`
    query {
      ${allType} {
        nodes {
            slug
            title            
        }
      }
    }
  `);
  const allResults = allResultsData.data[allType].nodes;
  const entriesPerPage = 2;
  const numPages = Math.ceil(allResults.length / entriesPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/${metadata.pathname}/` : `/${metadata.pathname}/${i + 1}`,
      component: path.resolve(
        path.join(__dirname, `${resourceType.toLowerCase()}/All${resourceType}.tsx`)
      ),
      context: {
        limit: entriesPerPage,
        skip: i * entriesPerPage,
        numPages
      }
    });
  });
}

export const resourcesCreatePages = async (graphql: any, actions: any) => {
  const { createPage } = actions;

  // Do the cover pages for each resource type, e.g. all blogpost
  Object.entries(resourceTypes).forEach(([resourceType, metadata]) => {
    createListing(graphql, createPage, resourceType, metadata);
  });

  // Now each resource
  const allResources = await graphql(`
    query {
      allResource {
        nodes {
          slug
          __typename
        }
      }
    }
  `);

  allResources.data.allResource.nodes.forEach((node: any) => {
    const componentFile = path.join(__dirname, `${node.__typename.toLowerCase()}/${node.__typename}.tsx`);

    createPage({
      path: node.slug,
      component: path.resolve(componentFile),
      context: {
        slug: node.slug
      }
    });
  });
};

export const resourcesSchemaCustomizations = (createTypes: any) => {
  // Load the GQL files for resource types
  const gqlFiles = ['blogpost'];
  gqlFiles.forEach((resourcetype: string) => {
    const fullFn = path.join(__dirname, `./${resourcetype}/types.graphql`);
    const resourceTypes = readFileSync(`${fullFn}`, {
      encoding: `utf-8`
    });
    createTypes(resourceTypes);
  });
};

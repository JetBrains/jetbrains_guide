import { readFileSync } from 'fs';
import path from 'path';
import { tip2CreateResolvers } from './tip2/createResolvers';

export const resourceTypes = {
  BlogPost: { plural: 'Blog Posts', pathname: 'blogposts' },
  Playlist2: { plural: 'Playlists', pathname: 'playlists2' },
  Tutorial2: { plural: 'Tutorials', pathname: 'tutorials2' },
  TutorialStep2: { plural: 'Tutorial Steps', pathname: 'tutorialsteps2' },
  Tip2: { plural: 'Tip2s', pathname: 'tip2s' }
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
  Object.entries(resourceTypes)
    .forEach(([resourceType, metadata]) => {
      if (resourceType != 'TutorialStep2') {
        createListing(graphql, createPage, resourceType, metadata);
      }
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
  const gqlFiles = ['blogpost', 'playlist2', 'tutorial2', 'tutorialstep2', 'tip2'];
  gqlFiles.forEach((resourcetype: string) => {
    const fullFn = path.join(__dirname, `./${resourcetype}/types.graphql`);
    const resourceTypes = readFileSync(`${fullFn}`, {
      encoding: `utf-8`
    });
    createTypes(resourceTypes);
  });
};

export const resourcesCreateResolvers = async (createResolvers: any) => {
  await tip2CreateResolvers(createResolvers);
};

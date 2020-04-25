import { readFileSync } from 'fs';
import path from 'path';

export const referenceTypes = {
  Author: { plural: 'Authors', pathname: 'authors' },
  Topic2: { plural: 'Topics2', pathname: 'topics2' }
};

async function createListing(graphql: any, createPage: any, referenceType: string, metadata: any) {
  const allType = `all${referenceType}`;
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
        path.join(__dirname, `${referenceType.toLowerCase()}/All${referenceType}.tsx`)
      ),
      context: {
        limit: entriesPerPage,
        skip: i * entriesPerPage,
        numPages
      }
    });
  });
}

export const referencesCreatePages = async (graphql: any, actions: any) => {
  const { createPage } = actions;

  // Do the cover pages for each reference type, e.g. all authors
  Object.entries(referenceTypes).forEach(([referenceType, metadata]) => {
    createListing(graphql, createPage, referenceType, metadata);
  });

  // Now each reference
  const allReferences = await graphql(`
    query {
      allReference {
        nodes {
          slug
          __typename
        }
      }
    }
  `);

  allReferences.data.allReference.nodes.forEach((node: any) => {
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

export const referencesSchemaCustomizations = (createTypes: any) => {
  // Load the GQL files for reference types
  const gqlFiles = ['author', 'topic2'];
  gqlFiles.forEach((referencetype: string) => {
    const fullFn = path.join(__dirname, `./${referencetype}/types.graphql`);
    const referenceTypes = readFileSync(`${fullFn}`, {
      encoding: `utf-8`
    });
    createTypes(referenceTypes);
  });
};

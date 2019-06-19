/*

Use the references config from the site to generate listing
pages and

 */

import path from 'path';

interface ConfigReference {
  plural: string;
  layout: string;
}

interface CreateReferencesProps {
  [k: string]: ConfigReference
}


const createReferences = (graphql: any, createPage: any, references: CreateReferencesProps) => {
  // Iterate through each reference entry and make:
  // 1. The listing page for all the values in that reference type,
  //    e.g. /items
  // 2. Pages for each value of that reference type, e.g. /items/angular

  // First the listings of refValues
  Object.entries(references).map(([refName, reference]) => {

    const targetPath = `/${reference.plural.toLowerCase()}/`;
    const targetComponent = `src/templates/${reference.plural}.tsx`;
    createPage({
      path: targetPath,
      component: path.resolve(targetComponent)
    });

    // Now pages for each refValue
    const collection = refName[0].toUpperCase() + refName.substring(1);
    graphql(`
  query {
    refValues: all${collection}Yaml(sort: {fields: [title]}, limit: 1000) {
      nodes {
        label
      }
    }    
  }
    `).then(({ data }: any) => {
      // For each label, make a page
      const { nodes } = data.refValues;
      nodes.map(({ label }: any) => {
        const targetPath = `/${reference.plural.toLowerCase()}/${label}/`;
        const singular = refName[0].toUpperCase() + refName.substring(1);
        const targetComponent = `src/templates/${singular}.tsx`;
        createPage({
          path: targetPath,
          component: path.resolve(targetComponent),
          context: {
            label: label
          }
        });
      });
    });
  });
};

export default createReferences;

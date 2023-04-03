import {readFileSync} from 'fs';
import path from 'path';

export const referenceTypes = {
    Author: {plural: 'Authors', pathname: 'authors'},
    Product: {plural: 'Products', pathname: 'products'},
    Technology: {plural: 'Technologies', pathname: 'technologies'},
    Topic: {plural: 'Topics', pathname: 'topics'}
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
    const entriesPerPage = 25;
    const numPages = Math.ceil(allResults.length / entriesPerPage);
    Array.from({length: numPages}).forEach((_, i) => {
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
    const {createPage} = actions;

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
    const gqlFiles = ['author', 'product', 'technology', 'topic'];
    gqlFiles.forEach((referencetype: string) => {
        const fullFn = path.join(__dirname, `./${referencetype}/types.graphql`);
        const referenceTypes = readFileSync(`${fullFn}`, {
            encoding: `utf-8`
        });
        createTypes(referenceTypes);
    });
};

export const referenceResources = async (createResolvers: any) => {
    // Can't use an interface like Reference as the resolver
    // key, have to run this for each type.
    Object.keys(referenceTypes).forEach((thisReference: string) => {
        createResolvers({
            [thisReference]: {
                referenceResources: {
                    type: ['Resource'],
                    async resolve(source: any, args: any, context: any, info: any) {
                        // @ts-ignore
                        const s = source;
                        // noinspection UnnecessaryLocalVariableJS
                        const theseResources = context.nodeModel.getAllNodes({type: `Resource`})
                            .filter((resourceNode: any) => {
                                if (s.internal.type === 'Author') {
                                    // Hack to hardwire target evaluation to
                                    // single value, in the case of Author, vs.
                                    // multiple values, in the case of topic etc.
                                    return resourceNode.author === s.label;
                                } else {
                                    // The target is going to be an array.
                                    // @ts-ignore
                                    const thisPlural = referenceTypes[thisReference].plural.toLowerCase();
                                    const targetField = resourceNode[thisPlural];
                                    return targetField.includes(s.label);
                                }

                            });
                        return theseResources;
                    }
                }
            }
        });
    })
};

export const referencesCreateResolvers = async (createResolvers: any) => {
    await referenceResources(createResolvers);
};

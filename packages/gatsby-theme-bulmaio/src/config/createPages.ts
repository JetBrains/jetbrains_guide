import createReferences from './createReferences';
import createResources from './createResources';

const createPages = async (actions: any, graphql: any, pluginOptions: any) => {
  const { createPage } = actions;
  const { references, resources } = pluginOptions;

  // Generate the references pages
  createReferences(graphql, createPage, references);
  await createResources(graphql, createPage, resources);

};

module.exports = createPages;

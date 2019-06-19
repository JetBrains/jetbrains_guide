import createReferences from './createReferences';
import createResources from './createResources';
import { GatsbyCreatePages } from './types';

const createPages: GatsbyCreatePages = async ({ actions, graphql }: any, pluginOptions: any) => {
  const { createPage } = actions;
  const { references, resources } = pluginOptions;

  // Generate the references pages
  createReferences(graphql, createPage, references);
  createResources(graphql, createPage, resources);

};

module.exports = createPages;

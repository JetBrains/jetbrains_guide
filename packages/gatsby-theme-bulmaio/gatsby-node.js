// noinspection JSUnresolvedFunction
require('source-map-support').install();
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017'
  }
});

exports.createPages = require('./src/config/createPages');
exports.onCreateNode = require('./src/config/createNode');
exports.sourceNodes = require('./src/config/sourceNodes');

// New-style
const { setupSchemaCustomizations } = require('./src/config2/schemaCustomizations');
exports.createSchemaCustomization = setupSchemaCustomizations;

const onCreatePages = async ({ actions, graphql }, pluginOptions) => {
  const oldCreatePages = require('./src/config/createPages');
  const { setupCreatePages } = require('./src/config2/createPages');

  oldCreatePages(actions, graphql, pluginOptions);
  await setupCreatePages(actions, graphql);
};

exports.createPages = onCreatePages;

const onCreateNode = async ({
  actions, getNode, node,
  createNodeId, createContentDigest,
  reporter,
}) => {
  const oldCreateNode = require('./src/config/createNode');
  const { setupCreateNode } = require('./src/config2/createNode');

  await oldCreateNode(actions, getNode, node);
  await setupCreateNode(actions,
    getNode,
    node,
    createNodeId,
    createContentDigest,
    reporter
  );
};

exports.onCreateNode = onCreateNode;

const onCreateResolvers = async ({
  createResolvers
}) => {
  const oldCreateResolvers = require('./src/config/createResolvers');
  await oldCreateResolvers(createResolvers);
};
exports.createResolvers = onCreateResolvers;

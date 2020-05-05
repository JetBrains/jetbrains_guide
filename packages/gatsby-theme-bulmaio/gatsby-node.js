// noinspection JSUnresolvedFunction
require('source-map-support').install();
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017'
  }
});

const { setupSchemaCustomizations } = require('./src/config/schemaCustomizations');
exports.createSchemaCustomization = setupSchemaCustomizations;

const onCreatePages = async ({ actions, graphql }) => {
  const { setupCreatePages } = require('./src/config/createPages');
  await setupCreatePages(actions, graphql);
};

exports.createPages = onCreatePages;

const onCreateNode = async ({
  actions, getNode, node,
  createNodeId, createContentDigest,
  reporter,
}) => {
  const { setupCreateNode } = require('./src/config/createNode');
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
  const { setupCreateResolvers } = require('./src/config/createResolvers');
  await setupCreateResolvers(createResolvers);
};
exports.createResolvers = onCreateResolvers;

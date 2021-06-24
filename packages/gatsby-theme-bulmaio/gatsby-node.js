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

exports.onPreExtractQueries = async ({ getNodesByType, reporter }) => {
  let hasMissing = false;
  const markdownNodes = getNodesByType('MarkdownRemark');

  const authorLabels = new Set(await getNodesByType('Author')
    .map(author => author.label));

  const technologyLabels = new Set(await getNodesByType('Technology')
    .map(technology => technology.label));

  const topicLabels = new Set(await getNodesByType('Topic')
    .map(topic => topic.label));

  const productLabels = new Set(await getNodesByType('Product')
      .map(product => product.label));

  markdownNodes.forEach(markdownNode => {

    const fm = markdownNode.frontmatter;

    // TODO 2.1 Fix resource/reference interface sharing
    if (fm.author) {

      // ### 1. Check for missing authors
      // First get the known list of all author labels
      const author = fm.author;
      if (!authorLabels.has(author)) {
        reporter.warn(`GUIDE: Missing author ${author} on resource "${fm.title}"`);
        hasMissing = true;
      }

      // ### 2. Check for missing technologies
      // First get the known list of all author labels
      fm.technologies && fm.technologies.forEach(technology => {
        if (!technologyLabels.has(technology)) {
          reporter.warn(`GUIDE: Missing technology ${technology} on resource "${fm.title}"`);
          hasMissing = true;
        }
      });

      // ### 3. Check for missing authors
      // First get the known list of all author labels
      fm.topics && fm.topics.forEach(topic => {
        if (!topicLabels.has(topic)) {
          reporter.warn(`GUIDE: Missing topic ${topic} on resource "${fm.title}"`);
          hasMissing = true;
        }
      });

      // ### 4. Check for missing products
      // First get the known list of all author labels
      fm.products && fm.products.forEach(product => {
        if (!productLabels.has(product)) {
          reporter.warn(`GUIDE: Missing product ${product} on resource "${fm.title}"`);
          hasMissing = true;
        }
      });
    }
  });

  // ### Bail out if something missing
  if (hasMissing) throw `GUIDE: Missing references found in resources`;
};

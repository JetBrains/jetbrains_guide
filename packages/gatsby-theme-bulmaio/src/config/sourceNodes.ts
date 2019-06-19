const sourceNodes = ({ actions }: any, pluginOptions: any) => {
  const { createTypes } = actions;

  // This is an open file sent over from the site
  const typeDefs = pluginOptions.typeDefs;
  createTypes(typeDefs);
};

module.exports =sourceNodes;


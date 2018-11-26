const sourceNodes = ({ boundActionCreators, getNodes, getNode }: any) => {
  const { createNodeField } = boundActionCreators;

  const tipsOfAuthors = {};
  const authorOfTips = {}; // reverse index

  // as we can have multiple authors in tip we should handle both cases
  // both when author is specified as single item and when there is list of authors
  // abstracting it to helper function help prevent code duplication
  const getAuthorNodeByName = (name: string) =>
    getNodes().find((node2: any) => node2.internal.type === `MarkdownRemark` && node2.frontmatter.label === name);

  // iterate through all markdown nodes to link tips to author
  // and build author index
  getNodes()
    .filter((node: any) => node.internal.type === `MarkdownRemark`)
    .forEach((node: any) => {
      if (node.frontmatter.author) {
        const authorNodes =
          node.frontmatter.author instanceof Array
            ? node.frontmatter.author.map(getAuthorNodeByName) // get array of nodes
            : [getAuthorNodeByName(node.frontmatter.author)]; // get single node and create 1 element array

        // filtered not defined nodes and iterate through defined authors nodes to add data to indexes
        authorNodes.filter((authorNode: any) => authorNode).map((authorNode: any) => {
          // if it's first time for this author init empty array for his tips
          if (!(authorNode.id in tipsOfAuthors)) {
            // @ts-ignore
            tipsOfAuthors[authorNode.id] = [];
          }
          // add tip to this author
          // @ts-ignore
          tipsOfAuthors[authorNode.id].push(node.id);

          // @ts-ignore
          authorOfTips[node.id] = authorNode.id;
        });
      }
    });

  Object.entries(tipsOfAuthors).forEach(([authorNodeId, tipIds]) => {
    createNodeField({
      node: getNode(authorNodeId),
      name: `tips`,
      value: tipIds
    });
  });

  Object.entries(authorOfTips).forEach(([tipNodeId, authorId]) => {
    // @ts-ignore
    createNodeField({
      node: getNode(tipNodeId),
      name: `author`,
      value: authorId
    });
  });
};

module.exports = sourceNodes;

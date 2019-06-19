const { createFilePath } = require(`gatsby-source-filesystem`);
const remark = require('remark');
const remarkHTML = require('remark-html');

const createNode = async ({ node, getNode, actions }: any) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }

  // Clean up some resource nodes
  if (node.frontmatter) {
    const fm = node.frontmatter;
    if (fm.leadin) {
      const markdown = fm.leadin;
      fm.leadin = remark()
        .use(remarkHTML)
        .processSync(markdown)
        .toString();
    }
  }

  return node;
};

module.exports = createNode;

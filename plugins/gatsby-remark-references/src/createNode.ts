const remark = require('remark');
const remarkHTML = require('remark-html');

const { createFilePath } = require(`gatsby-source-filesystem`);

const createNode = ({ node, getNode, actions }: any) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });

    // For Tip type, convert markdown YAML fields -> HTML
    const frontmatter = node.frontmatter;
    if (frontmatter.type && frontmatter.type === 'tip') {
      const markdown = frontmatter.leadin;
      frontmatter.leadin = remark()
        .use(remarkHTML)
        .processSync(markdown)
        .toString();
    }
  }
  return node;
};

module.exports = createNode;

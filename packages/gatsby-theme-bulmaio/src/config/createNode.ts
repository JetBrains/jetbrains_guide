const remark = require('remark');
const remarkHTML = require('remark-html');
const remarkPlainText = require('remark-plain-text');

import { createFilePath } from 'gatsby-source-filesystem';
import { referenceTypes } from '../references/gatsby-setup';
import { resourceTypes } from '../resources/gatsby-setup';

const bothTypes = { ...resourceTypes, ...referenceTypes };
const pluralMapping = Object.fromEntries(
  Object.entries(bothTypes).map(([k, v]) => {
    return [v.pathname, k];
  })
);

const getResourceType = (node: any, parent: any) => {
  // Base the resource type on precedence
  // 1. Explicit resource type in frontmatter
  if (node.frontmatter.type) {
    return node.frontmatter.type;
  }

  // 2. Reverse-walk all the ancestors in path, looking for a segment
  // that matches a key in the pluralMapping
  // Could be faster and more accurate, does not bail out when
  // it first matches
  const reversedPath = parent.relativePath.split('/').reverse();
  const plural = reversedPath.find((segment: string) => {
    return Object.keys(pluralMapping).find(rt => {
      return rt === segment;
    });
  });
  if (plural) return pluralMapping[plural];
};

exports.setupCreateNode = async function onCreateNode(
  actions: any,
  getNode: any,
  node: any,
  createNodeId: any,
  createContentDigest: any,
  reporter: any,
) {
  const { createNode, createParentChildLink } = actions;

  const parent = getNode(node.parent);
  if (node.internal.type === `Mdx` && parent && parent.name === 'index') {
    const resourceType = getResourceType(node, parent);

    // Bail out if we don't figure out a content type
    if (!resourceType) return;
    const fieldData = { ...node.frontmatter };

    const slug = createFilePath({ node, getNode });

    // If the frontmatter has a label, use it, otherwise infer it
    // from the parent directory
    const label = fieldData['label'] ? fieldData['label'] : parent.relativeDirectory.split('/').slice(-1)[0];
    const resourceNode = {
      ...fieldData,
      id: createNodeId(`${node.id} >>> ${resourceType}`),
      slug,
      // TODO Dang, label winds up on everything, even if the
      //    type doesn't ask for it. Perhaps later we'll split
      //    resource and reference into separate create steps.
      label,
      resourceType,
      parent: node.id,
      children: [],
      internal: {
        type: resourceType,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData)
      }
    };

    // Convert leadin to Markdown output
    if (resourceNode.leadin) {
      const markdown = resourceNode.leadin;
      resourceNode.leadin = remark()
        .use(remarkHTML)
        .processSync(markdown)
        .toString();
    }

    // Add excerpt so we can index it in search
    resourceNode.excerpt = remark()
        .use(remarkPlainText)
        .processSync(node.rawBody.replace(/^---[\s\S]+?---/, ''))
        .toString()
        .trim()
        .substr(0, 1600);

    resourceNode.fileAbsolutePath = node.fileAbsolutePath;
    createNode(resourceNode);
    createParentChildLink({
      parent: node,
      child: resourceNode
    });
    return resourceNode;
  }
};

import path from 'path';

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
  const reversedPath = parent.relativePath.split(path.sep).reverse();
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
    reporter.info('\n\n #####  We are in ################\n\n')
    const resourceType = getResourceType(node, parent);

    // Bail out if we don't figure out a content type
    if (!resourceType) return;
    const fieldData = { ...node.frontmatter };

    const slug = createFilePath({ node, getNode });
    const label = parent.relativeDirectory.split(path.sep).slice(-1)[0];
    const resourceNode = {
      ...fieldData,
      id: createNodeId(`${node.id} >>> ${resourceType}`),
      slug,
      // TODO Dang, label winds up on everything, even if the
      //    type doesn't ask for it. Perhaps later we'll split
      //    resource and reference into separate create steps.
      label,
      parent: node.id,
      children: [],
      internal: {
        type: resourceType,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData)
      }
    };

    resourceNode.fileAbsolutePath = node.absolutePath;
    createNode(resourceNode);
    createParentChildLink({
      parent: node,
      child: resourceNode
    });
    return resourceNode;
  }
};

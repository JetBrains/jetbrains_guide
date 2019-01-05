import { join, resolve } from 'path';

// From https://github.com/gatsbyjs/gatsby/issues/3129

interface ISingleReference {
  [index: string]: string;
}

interface IManyReference {
  [index: string]: string[];
}

interface IResourceReferences {
  author: ISingleReference;
  technologies: IManyReference;
  topics: IManyReference;
}

const sourceNodes = ({ boundActionCreators, getNodes, getNode }: any) => {
  const { createNodeField } = boundActionCreators;

  // Compendium of all resources, slug -> node.id
  const slugsToResource: ISingleReference = {};

  // Each kind of category, e.g. author, gets fields for each kind of resource
  const resourcesOfReferences = { author: {}, technology: {}, topic: {} };

  // Each resource, e.g. tip, gets fields for each kind of category
  const referencesOfResource: IResourceReferences = { author: {}, technologies: {}, topics: {} };

  // Find reftype node (e.g. author) by label name
  const getReferenceNodeByLabel = (reftype: string, name: string) =>
    getNodes().find((node2: any) => {
      const fm = node2.frontmatter;
      return node2.internal.type === `MarkdownRemark` && fm.type === reftype && fm.label === name;
    });

  // iterate through all markdown nodes to link resources to reftypes
  // and build reftype index
  getNodes()
    .filter((node: any) => node.internal.type === `MarkdownRemark`)
    .forEach((node: any) => {
      // Add this to the slug->node.id mapping
      slugsToResource[node.fields.slug] = node.id;

      if (node.frontmatter.author) {
        const authorNode = getReferenceNodeByLabel('author', node.frontmatter.author);

        // Put this author, on the resource
        referencesOfResource.author[node.id] = authorNode.id;

        // Add this resource, to the author
        if (!(authorNode.id in resourcesOfReferences.author)) {
          // @ts-ignore
          resourcesOfReferences.author[authorNode.id] = [];
        }
        // add tip to this author
        // @ts-ignore
        resourcesOfReferences.author[authorNode.id].push(node.id);
      }

      if (node.frontmatter.technologies) {
        const technologyNodes = node.frontmatter.technologies.map((technologyLabel: string) => {
          return getReferenceNodeByLabel('technology', technologyLabel);
        });

        technologyNodes
          .filter((technologyNode: any) => technologyNode)
          .map((technologyNode: any) => {
            // Add this resource, to the reference
            if (!(technologyNode.id in resourcesOfReferences.technology)) {
              // @ts-ignore
              resourcesOfReferences.technology[technologyNode.id] = [];
            }
            // @ts-ignore
            resourcesOfReferences.technology[technologyNode.id].push(node.id);

            // Add this reference to the resource
            if (!referencesOfResource.technologies[node.id]) {
              referencesOfResource.technologies[node.id] = [technologyNode.id];
            } else {
              referencesOfResource.technologies[node.id].push(technologyNode.id);
            }
          });
      }

      if (node.frontmatter.topics) {
        const topicNodes = node.frontmatter.topics.map((topicLabel: string) => {
          return getReferenceNodeByLabel('topic', topicLabel);
        });

        topicNodes
          .filter((topicNode: any) => topicNode)
          .map((topicNode: any) => {
            // Add this resource, to the reference
            if (!(topicNode.id in resourcesOfReferences.topic)) {
              // @ts-ignore
              resourcesOfReferences.topic[topicNode.id] = [];
            }
            // @ts-ignore
            resourcesOfReferences.topic[topicNode.id].push(node.id);

            // Add this reference to the resource
            if (!referencesOfResource.topics[node.id]) {
              referencesOfResource.topics[node.id] = [topicNode.id];
            } else {
              referencesOfResource.topics[node.id].push(topicNode.id);
            }
          });
      }
    });

  // First the resources on references
  Object.entries(resourcesOfReferences.author).forEach(([authorNodeId, tipIds]) => {
    createNodeField({
      node: getNode(authorNodeId),
      name: `tips`,
      value: tipIds
    });
  });

  Object.entries(resourcesOfReferences.topic).forEach(([topicNodeId, tipIds]) => {
    createNodeField({
      node: getNode(topicNodeId),
      name: `tips`,
      value: tipIds
    });
  });

  Object.entries(resourcesOfReferences.technology).forEach(([technologyNodeId, tipIds]) => {
    createNodeField({
      node: getNode(technologyNodeId),
      name: `tips`,
      value: tipIds
    });
  });

  // Now the references on resources
  Object.entries(referencesOfResource.author).forEach(([tipNodeId, authorId]) => {
    // @ts-ignore
    createNodeField({
      node: getNode(tipNodeId),
      name: `author`,
      value: authorId
    });
  });

  Object.entries(referencesOfResource.technologies).forEach(([tipNodeId, technologyIds]) => {
    // @ts-ignore
    createNodeField({
      node: getNode(tipNodeId),
      name: `technologies`,
      value: technologyIds
    });
  });

  Object.entries(referencesOfResource.topics).forEach(([tipNodeId, topicIds]) => {
    // @ts-ignore
    createNodeField({
      node: getNode(tipNodeId),
      name: `topics`,
      value: topicIds
    });
  });

  // For each tutorial, put the related tutorial steps onto a field
  Object.values(slugsToResource).forEach((nodeId: string) => {
    const node = getNode(nodeId);
    const nodeSlug = node.fields.slug;
    if (node.frontmatter.type === 'tutorial') {
      // Iterate over each step, make a full slug, get the object, append
      const stepSlugs = node.frontmatter.steps.map((stepSlug: string) => join(nodeSlug, stepSlug, '/'));
      const steps = stepSlugs.map((stepSlug: string) => {
        return slugsToResource[stepSlug];
      });
      createNodeField({
        node,
        name: 'tutorialsteps',
        value: steps
      });
    } else if (node.frontmatter.type === 'tutorialstep') {
      // Put a link to the parent
      const parentSlug = `${resolve(nodeSlug, '..')}/`;
      createNodeField({
        node,
        name: 'tutorial',
        value: slugsToResource[parentSlug]
      });
    }
  });
};

module.exports = sourceNodes;

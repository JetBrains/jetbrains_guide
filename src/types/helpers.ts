import { IAuthorNode } from './authors/models';
import { IBaseResourceEdges } from './base_models';
import { ITechnologyNode } from './technologies/models';
import { ITopicNode } from './topics/models';

export function makeReferences(authorNodes: IAuthorNode[], technologyNodes: ITechnologyNode[], topicNodes: ITopicNode[]) {
  const references: any = {
    author: {},
    technology: {},
    topic: {}
  };
  authorNodes.forEach(({ frontmatter }) => {
    references.author[frontmatter.label] = frontmatter;
  });
  technologyNodes.forEach(({ frontmatter }) => {
    references.technology[frontmatter.label] = frontmatter;
  });
  topicNodes.forEach(({ frontmatter }) => {
    references.topic[frontmatter.label] = frontmatter;
  });
  return references;
}

export function makeTips(tipsEdges: IBaseResourceEdges, references: any, comparison = () => true) {
  // Take a list of posts and:
  // a. Dereference the author and topics
  // b. Only include those matching a filter condition
  const keyedAuthor = references.author;
  const keyedTechnology = references.technology;
  const keyedTopic = references.topic;

  return tipsEdges
    .map(({ node: { frontmatter, fields } }) => {
      return {
        ...frontmatter,
        slug: fields.slug,
        author: keyedAuthor ? keyedAuthor[frontmatter.author] : undefined,
        technologies: frontmatter.technologies.map(technology => keyedTechnology[technology]),
        topics: frontmatter.topics.map(topic => keyedTopic[topic])
      };
    })
    .filter(comparison);
}

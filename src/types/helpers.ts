import { IAuthorEdges } from './authors/models';
import { ITechnologyEdges } from './technologies/models';
import { ITopicEdges } from './topics/models';

function makeReferences(authorEdges: IAuthorEdges, technologyEdges: ITechnologyEdges, topicEdges: ITopicEdges) {
  const references: any = {
    author: {},
    technology: {},
    topic: {}
  };
  authorEdges.forEach(({ node: { frontmatter } }) => {
    references.author[frontmatter.label] = frontmatter;
  });
  technologyEdges.forEach(({ node: { frontmatter } }) => {
    references.technology[frontmatter.label] = frontmatter;
  });
  topicEdges.forEach(({ node: { frontmatter } }) => {
    references.author[frontmatter.label] = frontmatter;
  });
  return references;
}

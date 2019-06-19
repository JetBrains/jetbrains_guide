import { graphql } from 'gatsby';

export const resourceCardTopicFragment = graphql`
  fragment ResourceCardTopicFragment on Frontmatter {
    topics {
      label
      slug
    }  
  }
`;

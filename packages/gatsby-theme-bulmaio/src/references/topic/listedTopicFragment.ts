import { graphql } from 'gatsby';

export const query = graphql`
  fragment ListedTopicFragment on Topic {
    label
    slug
    title
    subtitle
    accent
    icon
    body
  }
`;

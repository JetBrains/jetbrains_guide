import { graphql } from 'gatsby';

export const query = graphql`
  fragment ListedTopic2Fragment on Topic2 {
    label
    slug
    title
    subtitle
    slug
    accent
    icon
  }
`;

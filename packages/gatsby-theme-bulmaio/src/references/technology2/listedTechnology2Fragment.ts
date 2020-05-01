import { graphql } from 'gatsby';

export const query = graphql`
  fragment ListedTechnology2Fragment on Technology2 {
    label
    slug
    title
    subtitle
    slug
    logo {
      publicURL
    }
  }
`;


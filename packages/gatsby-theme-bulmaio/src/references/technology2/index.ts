// noinspection JSUnusedGlobalSymbols
import { graphql } from 'gatsby';

export const listedTechnology2Fragment = graphql`
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


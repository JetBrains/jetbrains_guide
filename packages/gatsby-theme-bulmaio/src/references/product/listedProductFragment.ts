import { graphql } from 'gatsby';

export const query = graphql`
  fragment ListedProductFragment on Product {
    label
    slug
    title
    subtitle
    body
    logo {
      ...ThumbnailFragment
    }
  }
`;


import { graphql } from 'gatsby';

export const resourceCardProductFragment = graphql`
  fragment ResourceCardProductFragment on Frontmatter {
    products {
      label
      slug
    }
  }
`;

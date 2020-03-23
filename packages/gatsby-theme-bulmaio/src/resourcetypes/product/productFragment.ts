import { graphql } from 'gatsby';

export const productFragment = graphql`
  fragment ProductFragment on ProductYaml {
    label
    title
    subtitle
    logo {
      publicURL
    }
    body
    resources {
      ...ListedResourceFragment
    }
  }
`;

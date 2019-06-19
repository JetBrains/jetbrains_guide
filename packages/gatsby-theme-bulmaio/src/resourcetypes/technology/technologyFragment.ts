import { graphql } from 'gatsby';

export const technologyFragment = graphql`
  fragment TechnologyFragment on TechnologyYaml {
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

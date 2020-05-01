import { graphql } from 'gatsby';

export const resourceCardLogoFragment = graphql`
  fragment ResourceCardLogoFragment on TechnologyYaml {
    logo {
      publicURL
    }
  }
`;

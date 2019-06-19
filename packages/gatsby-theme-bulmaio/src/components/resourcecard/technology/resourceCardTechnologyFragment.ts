import { graphql } from 'gatsby';

export const resourceCardTechnologyFragment = graphql`
  fragment ResourceCardTechnologyFragment on Frontmatter {
    technologies {
      label
      slug
    }
  }
`;

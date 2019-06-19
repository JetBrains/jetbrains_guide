import { graphql } from 'gatsby';

export const seeAlsoFragment = graphql`
  fragment SeeAlsoFragment on Frontmatter {
    seealso {
      title
      href
    }
  }
`;

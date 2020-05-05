import { graphql } from 'gatsby';

export const seeAlsoFragment2 = graphql`
  fragment SeeAlsoFragment2 on Tip {
    seealso {
      title
      href
    }
  }
`;

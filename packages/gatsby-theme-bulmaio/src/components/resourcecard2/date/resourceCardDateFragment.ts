import { graphql } from 'gatsby';

export const resourceCardDateFragment = graphql`
  fragment ResourceCardDateFragment on Frontmatter {
    date(formatString: "MMMM Do, YYYY")
  }
`;

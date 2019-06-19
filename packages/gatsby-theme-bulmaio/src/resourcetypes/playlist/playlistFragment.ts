import { graphql } from 'gatsby';

export const playlistFragment = graphql`
  fragment PlaylistFragment on MarkdownRemark {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        ...ResourceCardAuthorFragment
        ...ResourceCardTechnologyFragment
        ...ResourceCardTopicFragment
        playlistItems {
          ...ListedResourceFragment
        }
      }
  }
`;

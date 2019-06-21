import { graphql } from 'gatsby';

export const tipFragment = graphql`
  fragment TipFragment on MarkdownRemark {
      html
      fields {
        slug
      }
      frontmatter {
        title
        subtitle
        cardThumbnail {
            publicURL
        }
        date(formatString: "MMMM Do, YYYY")
        shortVideo {
          ...VideoFragment
        }
        longVideo {
          ...VideoFragment
        }
        leadin
        ...SeeAlsoFragment
        ...ResourceCardAuthorFragment
        ...ResourceCardTechnologyFragment
        ...ResourceCardTopicFragment
      }
      ...InPlaylistsFragment
  }
`;

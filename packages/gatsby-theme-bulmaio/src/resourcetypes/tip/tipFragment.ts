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
        animatedGif {
            file {
                publicURL
            }
            width
            height
        }
        screenshot {
          childImageSharp {
            fixed(width: 600) {
            ...GatsbyImageSharpFixed
            }
          }  
        }
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

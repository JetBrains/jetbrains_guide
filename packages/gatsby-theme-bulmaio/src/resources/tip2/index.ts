// noinspection JSUnusedGlobalSymbols
import { graphql } from 'gatsby';

export const listedTip2Fragment = graphql`
  fragment ListedTip2Fragment on Tip2 {
    label
    slug
    title
    subtitle
    slug
    date(formatString: "MMMM Do, YYYY")
    thumbnail {
      publicURL
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    author2 {
      slug
      title
      thumbnail {
        publicURL
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

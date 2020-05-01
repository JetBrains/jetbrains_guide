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
      ...ThumbnailFragment
    }
    author2 {
      slug
      title
      thumbnail {
        ...ThumbnailFragment
      }
    }
  }
`;

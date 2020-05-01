import { graphql } from 'gatsby';

export const query = graphql`
  fragment ListedResourceFragment2 on Resource {
    slug
    title
    subtitle
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
    technologies2 {
      label
      slug
    }
    topics2 {
      label
      slug
    }      
  }
`;

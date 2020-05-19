import { graphql } from 'gatsby';

export const query = graphql`
  fragment ListedResourceFragment2 on Resource {
    slug
    title
    subtitle
    date(formatString: "YYYY-MM-DD")
    thumbnail {
      ...ThumbnailFragment
    }
    author {
      slug
      title
      thumbnail {
        ...ThumbnailFragment
      }
    }
    products {
      label
      slug
    }
    technologies {
      label
      slug
    }
    topics {
      label
      slug
    }      
  }
`;

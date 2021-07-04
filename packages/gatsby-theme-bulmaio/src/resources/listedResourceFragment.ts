import { graphql } from 'gatsby';

export const query = graphql`
  fragment ListedResourceFragment on Resource {
    slug
    title
    subtitle
    date(formatString: "YYYY-MM-DD")
    resourceType
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

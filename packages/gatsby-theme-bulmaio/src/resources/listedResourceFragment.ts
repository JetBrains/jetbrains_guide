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
    author {
      slug
      title
      thumbnail {
        ...ThumbnailFragment
      }
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

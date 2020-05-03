import { graphql } from 'gatsby';

export const query = graphql`
  fragment ListedTutorialStep2Fragment on TutorialStep2 {
    slug
    title
    subtitle
    slug
    date(formatString: "MMMM Do, YYYY")
    thumbnail {
      ...ThumbnailFragment
    }
    cardThumbnail {
      ...ThumbnailFragment
    }
    author2 {
      ...ListedAuthor2Fragment
    }
    technologies2 {
      ...ListedTechnology2Fragment
    }
    topics2 {
      ...ListedTopic2Fragment
    }    
  }
`;

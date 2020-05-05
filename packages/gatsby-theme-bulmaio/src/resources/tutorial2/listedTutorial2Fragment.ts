import { graphql } from 'gatsby';

export const query = graphql`
  fragment ListedTutorial2Fragment on Tutorial2 {
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
    tutorialItems {
        ...ListedResourceFragment2
    }
    author {
      ...ListedAuthorFragment
    }
    technologies {
      ...ListedTechnologyFragment
    }
    topics2 {
      ...ListedTopic2Fragment
    }    
  }
`;

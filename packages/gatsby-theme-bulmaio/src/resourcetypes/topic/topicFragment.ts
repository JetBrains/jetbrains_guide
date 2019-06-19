import { graphql } from 'gatsby';

export const topicFragment = graphql`
  fragment TopicFragment on TopicYaml {
    label
    title
    subtitle
    accent
    icon
    body
    resources {
      ...ListedResourceFragment
    }
  }
`;

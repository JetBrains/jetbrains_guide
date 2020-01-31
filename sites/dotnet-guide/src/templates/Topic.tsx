import { Topic } from 'gatsby-theme-bulmaio/src/resourcetypes/topic';
import { graphql } from 'gatsby';

export default Topic;

export const query = graphql`
  query($label: String) {
    topic: topicYaml(label: { eq: $label }) {
      ...TopicFragment
    }
  }
`;

import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';
import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { Topic2Reference } from './models';
import { PageContext } from '../../components/models';

export interface TopicIndexProps {
  data: {
    allTopic2: {
      nodes: Topic2Reference[]
    }
  },
  pageContext: PageContext
}

const AllTopic2: FunctionComponent<TopicIndexProps> = ({
                                                        data: { allTopic2 },
                                                        pageContext: { numPages }
                                                      }: TopicIndexProps
) => {
  const listing = (
    <>
      <ul>
        {allTopic2.nodes.map(node => (
          <li key={node.slug}>
            <Link to={node.slug}>{node.title}</Link>
          </li>
        ))}
      </ul>
      {Array.from({ length: numPages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={`/authors/${i === 0 ? '' : i + 1}`}
          style={{ paddingRight: '1em' }}
        >
          {i + 1}
        </Link>
      ))}

    </>
  );
  return (
    <ReferenceLayout pageTitle="Topics" subtitle="Explore all available resources organized by a programming topic.">
      {{ listing: listing }}
    </ReferenceLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default AllTopic2;

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query {
    allTopic2 {
      nodes {
        title
        slug
        body
      }
    }
  }
`;

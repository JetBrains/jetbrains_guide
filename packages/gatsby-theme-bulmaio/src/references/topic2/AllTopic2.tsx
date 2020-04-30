import React, { FC } from 'react';
import { graphql } from 'gatsby';
import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { Topic2Reference } from './models';
import { PageContext } from '../../components/models';
import SubsectionTopic from '../../components/subsections/SubsectionTopic';
import Pagination from '../../components2/Pagination';

export interface TopicIndexProps {
  data: {
    allTopic2: {
      nodes: Topic2Reference[]
    }
  },
  pageContext: PageContext
}

const PAGE_TITLE = 'Topics';
const SUBTITLE = 'Explore all available resources organized by a programming topic.';

const AllTopic2: FC<TopicIndexProps> = (
  {
    data: { allTopic2: { nodes } },
    pageContext: { numPages }
  }
) => {
  const listing = nodes && (
    <nav className="bd-links bio-resourcecards">
      {nodes &&
      nodes.map(node => {
        return (
          <SubsectionTopic
            key={node.label}
            title={node.title}
            subtitle={node.subtitle}
            href={node.slug}
            accent={node.accent}
            icon={node.icon}
          />
        );
      })}
    </nav>
  );
  return (
    <ReferenceLayout
      pageTitle={PAGE_TITLE}
      subtitle={SUBTITLE}>
      {{
        listing: (
          <>
            {listing}
            <Pagination numPages={numPages} prefix={'topics2'} />
          </>
        )
      }}
    </ReferenceLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default AllTopic2;

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allTopic2(limit: $limit, skip: $skip, sort: {fields: [title]}) {
      nodes {
        ...ListedTopic2Fragment
      }
    }
  }
`;

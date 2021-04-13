import React, { FC } from 'react';
import { graphql } from 'gatsby';
import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { TopicReference } from 'gatsby-theme-bulmaio/src/references/topic/models';
import { PageContext } from 'gatsby-theme-bulmaio/src/components/models';
import SubsectionTopic from 'gatsby-theme-bulmaio/src/components/subsections/SubsectionTopic';
import Pagination from 'gatsby-theme-bulmaio/src/components/Pagination';
import { TwitterCardPage } from 'gatsby-theme-bulmaio/src/components/layout/MasterLayout';

export interface TopicIndexProps {
  data: {
    allTopic: {
      nodes: TopicReference[]
    }
  },
  pageContext: PageContext
}

const PAGE_TITLE = 'Topics';
const SUBTITLE = 'Explore all available resources organized by a programming topic.';

const twitterCardPage: TwitterCardPage = {
  title: PAGE_TITLE,
  description: SUBTITLE,
  image: ''
};

const AllTopic: FC<TopicIndexProps> = (
  {
    data: { allTopic: { nodes } },
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
      subtitle={SUBTITLE}
      twitterCardPage={twitterCardPage}
    >
      {{
        listing: (
          <>
            {listing}
            <Pagination numPages={numPages} prefix={'topics'} />
          </>
        )
      }}
    </ReferenceLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default AllTopic;

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allTopic(limit: $limit, skip: $skip, sort: {fields: [title]}) {
      nodes {
        ...ListedTopicFragment
      }
    }
  }
`;

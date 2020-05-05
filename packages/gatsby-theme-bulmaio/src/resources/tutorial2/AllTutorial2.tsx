import React, { FC } from 'react';
import { graphql } from 'gatsby';

import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { PageContext } from '../../components/models';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import Pagination from '../../components2/Pagination';
import { Tutorial2Resource } from './models';

interface AllTutorial2Props {
  data: {
    allTutorial2: {
      nodes: Tutorial2Resource[]
    }
  }
  pageContext: PageContext
}

const PAGE_TITLE = 'Tutorials';
const SUBTITLE = 'Learn how to work with technologies using detailed, multi-step lessons accompanied by code samples, instructions, and videos.';

const AllTutorial2: FC<AllTutorial2Props> = (
  {
    data: { allTutorial2: { nodes } },
    pageContext: { numPages }
  }) => {
  const listing = (
    <div>
      {nodes && nodes.map(resource => (
          <ResourceCard
            key={resource.slug}
            thumbnail={resource.thumbnail}
            media={{ href: resource.slug, title: resource.title, subtitle: resource.subtitle }}
            technologies={{ items: resource.technologies2 }}
            topics={{ items: resource.topics2 }}
            date={{ date: resource.date }}
            author={{ thumbnail: resource.author.thumbnail, slug: resource.author.slug, title: resource.author.title }}
          />
        )
      )}
    </div>
  );
  return (
    <ReferenceLayout
      pageTitle={PAGE_TITLE}
      subtitle={SUBTITLE}
    >
      {{
        listing: (
          <>
            {listing}
            <Pagination numPages={numPages} prefix={'tutorials2'} />
          </>
        )
      }}
    </ReferenceLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default AllTutorial2;

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allTutorial2(limit: $limit, skip: $skip, sort: {fields: [title]}) {
      nodes {
        ...ListedTutorial2Fragment
      }
    }
  }
`;

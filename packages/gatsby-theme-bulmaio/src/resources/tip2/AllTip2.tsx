import React, { FC } from 'react';
import { graphql } from 'gatsby';

import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { PageContext } from '../../components/models';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import Pagination from '../../components2/Pagination';
import { Tip2Resource } from './models';

interface AllTip2Props {
  data: {
    allTip2: {
      nodes: Tip2Resource[]
    }
  }
  pageContext: PageContext
}

const PAGE_TITLE = 'Tips';
const SUBTITLE = 'Visual, standalone, bite-sized learning resources organized into different categories.';

const AllTip2: FC<AllTip2Props> = (
  {
    data: { allTip2: { nodes } },
    pageContext: { numPages }
  }) => {

  const listing = (
    <div>
      {nodes && nodes.map(resource => (
          <ResourceCard
            key={resource.slug}
            thumbnail={resource.thumbnail}
            media={{ href: resource.slug, title: resource.title, subtitle: resource.subtitle }}
            technologies={{ items: resource.technologies }}
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
            <Pagination numPages={numPages} prefix={'tip2s'} />
          </>
        )
      }}
    </ReferenceLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default AllTip2;

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allTip2(limit: $limit, skip: $skip, sort: {fields: [title]}) {
      nodes {
        ...ListedTip2Fragment
      }
    }
  }
`;

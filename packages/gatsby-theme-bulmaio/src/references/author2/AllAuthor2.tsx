import React, { FC } from 'react';
import { graphql } from 'gatsby';

import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { ListedResources } from '../../resources/models';
import { PageContext } from '../../components/models';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import Pagination from '../../components2/Pagination';

interface AllAuthor2Props {
  data: {
    allAuthor2: {
      nodes: ListedResources
    }
  }
  pageContext: PageContext
}

const PAGE_TITLE = 'Authors';
const SUBTITLE = 'Resources organized by author.';

const AllAuthor2: FC<AllAuthor2Props> = (
  {
    data: { allAuthor2: { nodes } },
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
            author={{ thumbnail: resource.thumbnail, slug: resource.slug, title: resource.title }}
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
            <Pagination numPages={numPages} prefix={'author2s'} />
          </>
        )
      }}
    </ReferenceLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default AllAuthor2;

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allAuthor2(limit: $limit, skip: $skip, sort: {fields: [title]}) {
      nodes {
        ...ListedAuthor2Fragment
      }
    }
  }
`;

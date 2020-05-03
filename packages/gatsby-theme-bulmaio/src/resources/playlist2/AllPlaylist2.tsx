import React, { FC } from 'react';
import { graphql } from 'gatsby';

import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { PageContext } from '../../components/models';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import Pagination from '../../components2/Pagination';
import { Playlist2Resource } from './models';

interface AllPlaylist2Props {
  data: {
    allPlaylist2: {
      nodes: Playlist2Resource[]
    }
  }
  pageContext: PageContext
}

const PAGE_TITLE = 'Playlists';
const SUBTITLE = 'Curated, ordered collections of resources you can go through in a sitting.';

const AllPlaylist2: FC<AllPlaylist2Props> = (
  {
    data: { allPlaylist2: { nodes } },
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
            author={{ thumbnail: resource.author2.thumbnail, slug: resource.author2.slug, title: resource.author2.title }}
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
            <Pagination numPages={numPages} prefix={'playlists2'} />
          </>
        )
      }}
    </ReferenceLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default AllPlaylist2;

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allPlaylist2(limit: $limit, skip: $skip, sort: {fields: [title]}) {
      nodes {
        ...ListedPlaylist2Fragment
      }
    }
  }
`;

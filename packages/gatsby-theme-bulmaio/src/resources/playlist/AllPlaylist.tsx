import React, { FC } from 'react';
import { graphql } from 'gatsby';

import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { PageContext } from '../../components/models';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import Pagination from '../../components2/Pagination';
import { PlaylistResource } from './models';

interface AllPlaylistProps {
  data: {
    allPlaylist: {
      nodes: PlaylistResource[]
    }
  }
  pageContext: PageContext
}

const PAGE_TITLE = 'Playlists';
const SUBTITLE = 'Curated, ordered collections of resources you can go through in a sitting.';

const AllPlaylist: FC<AllPlaylistProps> = (
  {
    data: { allPlaylist: { nodes } },
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
            topics={{ items: resource.topics }}
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
            <Pagination numPages={numPages} prefix={'playlists2'} />
          </>
        )
      }}
    </ReferenceLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default AllPlaylist;

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allPlaylist(limit: $limit, skip: $skip, sort: {fields: [title]}) {
      nodes {
        ...ListedPlaylistFragment
      }
    }
  }
`;

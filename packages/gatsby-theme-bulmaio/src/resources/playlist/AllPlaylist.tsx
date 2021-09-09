import React, { FC } from 'react';
import { graphql } from 'gatsby';

import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { PageContext } from '../../components/models';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import Pagination from '../../components/Pagination';
import { PlaylistResource } from './models';
import { TwitterCardPage } from '../../components/layout/MasterLayout';

interface AllPlaylistProps {
  data: {
    allPlaylist: {
      nodes: PlaylistResource[]
    }
  }
  pageContext: PageContext
}

const PAGE_TITLE = '播放列表';
const SUBTITLE = '您可以在这些经过策划、有序的播放列表里取得所有学习材料的集合';

const twitterCardPage: TwitterCardPage = {
  title: PAGE_TITLE,
  description: SUBTITLE,
  image: ''
};

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
            resourceType={undefined} // do not show type on "all playlists" page
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
      twitterCardPage={twitterCardPage}
    >
      {{
        listing: (
          <>
            {listing}
            <Pagination numPages={numPages} prefix={'playlists'} />
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
    allPlaylist(
      limit: $limit, 
      skip: $skip, 
      sort: {
        fields: [date]
        order: DESC
      }
    ) {
      nodes {
        ...ListedPlaylistFragment
      }
    }
  }
`;

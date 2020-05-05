import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { Playlist2Resource } from './models';
// @ts-ignore
// noinspection ES6UnusedImports
import { SeeAlso } from '../../components2/seealso';
import SidebarLayout from '../../components/layout/SidebarLayout';
import { TwitterCardPage } from '../../components/layout/MasterLayout';
import { PlaylistSidebar2 } from './PlaylistSidebar2';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import ResourceCard from '../../components/resourcecard/ResourceCard';

export interface PlaylistProps {
  location: {
    search: string;
  };
  data: {
    playlist2: Playlist2Resource
  }
}

const Playlist2: FC<PlaylistProps> = (
  {
    location,
    data: {
      playlist2
    }
  }) => {

  // ##### Twitter Card support
  const twitterCardPage: TwitterCardPage = {
    title: playlist2.title,
    description: playlist2.subtitle ? playlist2.subtitle : '',
    image: playlist2.cardThumbnail ? `https://www.jetbrains.com${playlist2.cardThumbnail.publicURL}` : ''
  };

  // #### Sidebar
  const sidebar = <PlaylistSidebar2
    author={playlist2.author}
    date={playlist2.date}
    technologies={playlist2.technologies2}
    topics={playlist2.topics2}
  />;

  // Listing
  const listing = (
    <div>
      {playlist2.playlistItems && playlist2.playlistItems.map(resource => (
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

  const main = (
    <>
      {playlist2.body ? (
        <div className="columns">
          <div className="column is-11-desktop content">
            <MDXRenderer>{playlist2.body}</MDXRenderer>
          </div>
        </div>
      ) : null}
      {listing && (
        <div className="bio-tutorial-steps-listing">
          {listing}
        </div>
      )}

    </>
  );

  return (
    <SidebarLayout
      pageTitle={playlist2.title}
      subtitle={playlist2.subtitle}
      twitterCardPage={twitterCardPage}>
      {{
        // topNav,
        // bottomNav,
        sidebar,
        main
      }}
    </SidebarLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Playlist2;

export const query = graphql`
  query($slug: String!) {
    playlist2(slug: { eq: $slug }) {
      label
      slug
      title
      subtitle
      slug
      body
      date(formatString: "MMMM Do, YYYY")
      playlistItems {
        ...ListedResourceFragment2
      }
      author {
        ...ListedAuthorFragment
      }
      technologies2 {
        ...ListedTechnology2Fragment
      }
      topics2 {
        ...ListedTopic2Fragment
      }      
      cardThumbnail {
        publicURL
      }
    }
  }
`;

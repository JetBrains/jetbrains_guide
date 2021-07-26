import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { PlaylistResource } from './models';
// @ts-ignore
// noinspection ES6UnusedImports
import { SeeAlso } from '../../components/seealso';
import SidebarLayout from '../../components/layout/SidebarLayout';
import { TwitterCardPage } from '../../components/layout/MasterLayout';
import { PlaylistSidebar } from './PlaylistSidebar';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import ResourceCard from '../../components/resourcecard/ResourceCard';

export interface PlaylistProps {
  location: {
    search: string;
  };
  data: {
    playlist: PlaylistResource
  }
}

// noinspection JSUnusedLocalSymbols
const Playlist: FC<PlaylistProps> = (
  {
    location,
    data: {
      playlist
    }
  }) => {

  // ##### Twitter Card support
  const twitterCardPage: TwitterCardPage = {
    title: playlist.title,
    description: playlist.subtitle ? playlist.subtitle : '',
    image: playlist.thumbnail
        ? `https://www.jetbrains.com${playlist.thumbnail.publicURL}`
        : playlist.cardThumbnail
            ? `https://www.jetbrains.com${playlist.cardThumbnail.publicURL}`
            : ''
  };

  // #### Sidebar
  const sidebar = <PlaylistSidebar
    author={playlist.author}
    date={playlist.date}
    products={playlist.products}
    technologies={playlist.technologies}
    topics={playlist.topics}
  />;

  // Listing
  const listing = (
    <div>
      {playlist.playlistItems && playlist.playlistItems.map(resource => {
        const fullHref = `${resource.slug}?playlist=${playlist.label}`;
          return (
            <ResourceCard
              key={resource.slug}
              thumbnail={resource.thumbnail}
              resourceType={resource.resourceType}
              media={{ href: fullHref, title: resource.title, subtitle: resource.subtitle }}
              products={{ items: resource.products }}
              technologies={{ items: resource.technologies }}
              topics={{ items: resource.topics }}
              date={{ date: resource.date }}
              author={{ thumbnail: resource.author.thumbnail, slug: resource.author.slug, title: resource.author.title }}
            />
          );
        }
      )}
    </div>
  );

  const main = (
    <>
      {playlist.body ? (
        <div className="columns">
          <div className="column is-11-desktop content">
            <MDXRenderer>{playlist.body}</MDXRenderer>
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
      pageTitle={playlist.title}
      subtitle={playlist.subtitle}
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
export default Playlist;

export const query = graphql`
  query($slug: String!) {
    playlist(slug: { eq: $slug }) {
      label
      slug
      title
      subtitle
      slug
      body
      date(formatString: "YYYY-MM-DD")
      playlistItems {
        ...ListedResourceFragment
      }
      author {
        ...ListedAuthorFragment
      }
      products {
        ...ListedProductFragment
      }
      technologies {
        ...ListedTechnologyFragment
      }
      topics {
        ...ListedTopicFragment
      }
      thumbnail {
        publicURL
      }  
      cardThumbnail {
        publicURL
      }
    }
  }
`;

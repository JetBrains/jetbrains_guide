import React from 'react';
import { Element, Link as ScrollLink } from 'react-scroll';

import { SeeAlso, SeeAlsos } from 'gatsby-theme-bulmaio/src/components/seealso';
import { getPlaylist } from 'gatsby-theme-bulmaio/src/components/pagenav/common';
import getPrevNextBySlug from 'gatsby-theme-bulmaio/src/components/pagenav/getPrevNextBySlug';
import BottomNav from 'gatsby-theme-bulmaio/src/components/pagenav/BottomNav';
import TopNav from 'gatsby-theme-bulmaio/src/components/pagenav/TopNav';

import { InPlaylists } from 'gatsby-theme-bulmaio/src/components/playlists';
import { LongVideo, ShortVideo, Video } from 'gatsby-theme-bulmaio/src/components/video';
import { ResourceCardAuthorProps } from 'gatsby-theme-bulmaio/src/components/resourcecard/author';
import { ResourceCardTechnologies } from 'gatsby-theme-bulmaio/src/components/resourcecard/technology';
import { ResourceCardTopics } from 'gatsby-theme-bulmaio/src/components/resourcecard/topic';
import { TipSidebar } from './TipsSidebar';
import { TwitterCardPage } from '../../components/layout/MasterLayout';
import SidebarLayout from '../../components/layout/SidebarLayout';


const ClientSideOnlyPlayer = React.lazy(() =>
  import('../../components/video/GifPlayer')
)
export interface TipProps {
  location: {
    search: string;
  };
  data: {
    resource: {
      html: string;
      fields: {
        slug: string;
      }
      frontmatter: {
        title: string;
        subtitle: string;
        cardThumbnail: {
          publicURL: string
        }
        date: string;
        animatedGif?: {
          file: {
            publicURL: string
          }
          width: number
          height: number
        };
        shortVideo?: Video;
        longVideo?: Video;
        leadin: string;
        seealso?: SeeAlsos;
        author: ResourceCardAuthorProps;
        technologies: ResourceCardTechnologies;
        topics: ResourceCardTopics;
      }
      inPlaylists: InPlaylists
    }
  }
}


export const Tip: React.FC<TipProps> = (
  { location, data: { resource: { html, fields, frontmatter, inPlaylists } } }
) => {

  // #### TOPNAV/BOTTOMNAV The topNav/bottomNav when playlists are involved
  let bottomNav;
  let topNav;
  // Query param, or first item, or none
  const currentPlaylist = getPlaylist(location, inPlaylists);
  if (currentPlaylist) {
    // Now get prev/next
    const currentPlaylistItems = currentPlaylist.frontmatter.playlistItems;
    if (currentPlaylistItems) {
      const { previous, next } = getPrevNextBySlug(
        currentPlaylistItems.map(
          cpi => ({ slug: cpi.fields.slug, label: cpi.frontmatter.title })
        ),
        fields.slug
      );

      bottomNav = <BottomNav previous={previous} next={next} playlistLabel={currentPlaylist.frontmatter.label} />;

      // Topnav wants some more
      const parent = currentPlaylist ? {
        label: currentPlaylist.frontmatter.title,
        slug: currentPlaylist.fields.slug
      } : null;
      const siblings = currentPlaylistItems.map(item => {
        return { label: item.frontmatter.title, slug: item.fields.slug };
      });
      topNav = parent ? (
        <TopNav parent={parent} siblings={siblings} currentSlug={fields.slug}
                playlistLabel={currentPlaylist.frontmatter.label} kind="Item" />
      ) : null;
    }
  }

  // Videos
  const isSSR = typeof window === "undefined";
  const animatedGif = frontmatter.animatedGif;
  const shortVideo = frontmatter.shortVideo;
  const longVideo = frontmatter.longVideo;

  // ##### Sidebars
  const sidebar = <TipSidebar
    frontmatter={frontmatter}
    html={html}
    seealso={frontmatter.seealso}
    longVideo={longVideo}
    inPlaylists={inPlaylists}
  />;

  const main = (
    <div style={{ marginBottom: '3rem' }}>
      <div className="columns">
        {!isSSR && (
          <React.Suspense fallback={<div/>}>
            <ClientSideOnlyPlayer animatedGif={animatedGif}/>
          </React.Suspense>
        )}
        {shortVideo && <ShortVideo video={
          {
            posterURL: shortVideo.poster ? shortVideo.poster.publicURL : '',
            youtubeURL: shortVideo.url
          }} />
        }
        <div
          className="column content"
          style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
        >
          <div dangerouslySetInnerHTML={{ __html: frontmatter.leadin }} />
          <div>
            {html && (
              <ScrollLink
                activeClass="active"
                className="button is-light"
                to="in-depth"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                style={{ width: 'auto' }}
              >
                Learn More
              </ScrollLink>
            )}
            {longVideo && (
              <ScrollLink
                activeClass="active"
                className="button is-light"
                to="full-video"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                style={{ width: 'auto', marginLeft: '0.5em' }}
              >
                Full Video
              </ScrollLink>
            )}
          </div>
        </div>
      </div>
      {html && (
        <Element name="in-depth" className="element" style={{ marginTop: '1rem' }}>
          <header className="is-size-3 is-bold">In Depth</header>
          <div className="columns">
            <div className="column is-11-desktop content" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </Element>
      )}
      {frontmatter.seealso && (
        <Element name="see-also" className="element" style={{ marginTop: '1rem' }}>
          <SeeAlso items={frontmatter.seealso} />
        </Element>
      )}
      {longVideo && (
        <LongVideo video={
          {
            posterURL: longVideo.poster.publicURL,
            youtubeURL: longVideo.url
          }} />
      )}
    </div>
  );

  const twitterCardPage: TwitterCardPage = {
    title: frontmatter.title,
    description: frontmatter.subtitle,
    image: frontmatter.cardThumbnail ? `https://www.jetbrains.com${frontmatter.cardThumbnail.publicURL}` : ''
  };
  return (
    <SidebarLayout pageTitle={frontmatter.title} subtitle={frontmatter.subtitle} twitterCardPage={twitterCardPage}>
      {{
        topNav,
        bottomNav,
        sidebar,
        main
      }}
    </SidebarLayout>
  );

};

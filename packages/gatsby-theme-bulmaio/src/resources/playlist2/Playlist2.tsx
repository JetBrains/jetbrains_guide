import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { Playlist2Resource } from './models';
// @ts-ignore
// noinspection ES6UnusedImports
import { SeeAlso } from '../../components2/seealso';
import SidebarLayout from '../../components/layout/SidebarLayout';
import { TwitterCardPage } from '../../components/layout/MasterLayout';
import { Tip2Sidebar } from '../../components2/tipsidebar/Tip2Sidebar';
import { LongVideo, ShortVideo } from '../../components/video';
import { Link as ScrollLink } from 'react-scroll/modules';
import { Element } from 'react-scroll';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const ClientSideOnlyPlayer = React.lazy(() =>
  import('../../components/video/GifPlayer')
);

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

  // Videos
  const isSSR = typeof window === 'undefined';
  const animatedGif = playlist2.animatedGif;
  const shortVideo = playlist2.shortVideo;
  const longVideo = playlist2.longVideo;

  // ##### Sidebars
  const sidebar = <Tip2Sidebar
    date={playlist2.date}
    author={playlist2.author2}
    technologies={playlist2.technologies2}
    topics={playlist2.topics2}
    body={playlist2.body}
    seealso={playlist2.seealso}
    longVideo={playlist2.longVideo}
    inPlaylists={[]}
  />;

  const main = (
    <div style={{ marginBottom: '3rem' }}>
      <div className="columns">
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <ClientSideOnlyPlayer animatedGif={animatedGif} />
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
          <div dangerouslySetInnerHTML={{ __html: playlist2.leadin }} />
          <div>
            {playlist2.body && (
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
      {playlist2.body && (
        <Element name="in-depth" className="element" style={{ marginTop: '1rem' }}>
          <header className="is-size-3 is-bold">In Depth</header>
          <div className="columns">
            <div className="column is-11-desktop content">
              <MDXRenderer>{playlist2.body}</MDXRenderer>
            </div>
          </div>
        </Element>
      )}
      {playlist2.seealso && (
        <Element name="see-also" className="element" style={{ marginTop: '1rem' }}>
          <SeeAlso items={playlist2.seealso} />
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
      author2 {
        ...ListedAuthor2Fragment
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
      date(formatString: "MMMM Do, YYYY")
      animatedGif {
        file {
            publicURL
        }
        width
        height
      }
      shortVideo {
        ...VideoFragment
      }
      longVideo {
        ...VideoFragment
      }
      leadin
      author2 {
        ...ListedAuthor2Fragment
      }      
    }
  }
`;

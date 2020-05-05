import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { Tip2Resource } from './models';
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
import { getPlaylist } from '../../components2/pagenav/common';
import getPrevNextBySlug from '../../components2/pagenav/getPrevNextBySlug';
import BottomNav from '../../components2/pagenav/BottomNav';
import TopNav from '../../components2/pagenav/TopNav';

const ClientSideOnlyPlayer = React.lazy(() =>
  import('../../components/video/GifPlayer')
);

export interface TipProps {
  location: {
    search: string;
  };
  data: {
    tip2: Tip2Resource
  }
}

const Tip2: FC<TipProps> = (
  {
    location,
    data: {
      tip2
    }
  }) => {

  // #### TOPNAV/BOTTOMNAV The topNav/bottomNav when playlists are involved
  let bottomNav;
  let topNav;
  const currentPlaylist = getPlaylist(location, tip2.inPlaylists);
  if (currentPlaylist) {
    // Now get prev/next
    const currentPlaylistItems = currentPlaylist.playlistItems;
    if (currentPlaylistItems) {
      const { previous, next } = getPrevNextBySlug(
        currentPlaylistItems.map(
          cpi => ({ slug: cpi.slug, label: cpi.title })
        ),
        tip2.slug
      );

      bottomNav = <BottomNav previous={previous} next={next} playlistLabel={currentPlaylist.label} />;

      // Topnav wants some more
      const parent = currentPlaylist ? {
        label: currentPlaylist.title,
        slug: currentPlaylist.slug
      } : null;
      const siblings = currentPlaylistItems.map(item => {
        return { label: item.title, slug: item.slug };
      });
      topNav = parent ? (
        <TopNav parent={parent} siblings={siblings} currentSlug={tip2.slug}
                playlistLabel={currentPlaylist.label} kind="Item" />
      ) : null;
    }
  }

  // ##### Twitter Card support
  const twitterCardPage: TwitterCardPage = {
    title: tip2.title,
    description: tip2.subtitle ? tip2.subtitle : '',
    image: tip2.cardThumbnail ? `https://www.jetbrains.com${tip2.cardThumbnail.publicURL}` : ''
  };

  // Videos
  const isSSR = typeof window === 'undefined';
  const animatedGif = tip2.animatedGif;
  const shortVideo = tip2.shortVideo;
  const longVideo = tip2.longVideo;

  // ##### Sidebars
  const sidebar = <Tip2Sidebar
    date={tip2.date}
    author={tip2.author}
    technologies={tip2.technologies}
    topics={tip2.topics}
    body={tip2.hasBody ? tip2.body : undefined}
    seealso={tip2.seealso}
    longVideo={tip2.longVideo}
    inPlaylists={[]}
  />;

  console.log(349449, tip2.hasBody)
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
          <div dangerouslySetInnerHTML={{ __html: tip2.leadin }} />
          <div>
            {tip2.hasBody && (
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
      {tip2.hasBody && (
        <Element name="in-depth" className="element" style={{ marginTop: '1rem' }}>
          <header className="is-size-3 is-bold">In Depth</header>
          <div className="columns">
            <div className="column is-11-desktop content">
              <MDXRenderer>{tip2.body}</MDXRenderer>
            </div>
          </div>
        </Element>
      )}
      {tip2.seealso && (
        <Element name="see-also" className="element" style={{ marginTop: '1rem' }}>
          <SeeAlso items={tip2.seealso} />
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
      pageTitle={tip2.title}
      subtitle={tip2.subtitle}
      twitterCardPage={twitterCardPage}>
      {{
        topNav,
        bottomNav,
        sidebar,
        main
      }}
    </SidebarLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Tip2;

export const query = graphql`
  query($slug: String!) {
    tip2(slug: { eq: $slug }) {
      label
      slug
      title
      subtitle
      slug
      hasBody
      body
      date(formatString: "MMMM Do, YYYY")
      inPlaylists {
         ...ListedPlaylist2Fragment
      }
      author {
        ...ListedAuthorFragment
      }
      technologies {
        ...ListedTechnologyFragment
      }
      topics {
        ...ListedTopicFragment
      }      
      cardThumbnail {
        publicURL
      }
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
    }
  }
`;

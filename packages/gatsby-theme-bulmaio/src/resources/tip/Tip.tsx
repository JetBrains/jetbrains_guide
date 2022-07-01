import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { TipResource } from './models';
// @ts-ignore
// noinspection ES6UnusedImports
import { SeeAlso } from '../../components/seealso';
import SidebarLayout from '../../components/layout/SidebarLayout';
import { TwitterCardPage } from '../../components/layout/MasterLayout';
import { TipSidebar } from '../../components/tipsidebar/TipSidebar';
import { LongVideo, ShortVideo } from '../../components/video';
import { Link as ScrollLink } from 'react-scroll/modules';
import { Element } from 'react-scroll';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { getPlaylist } from '../../components/pagenav/common';
import getPrevNextBySlug from '../../components/pagenav/getPrevNextBySlug';
import BottomNav from '../../components/pagenav/BottomNav';
import TopNav from '../../components/pagenav/TopNav';

const ClientSideOnlyPlayer = React.lazy(() =>
  import('../../components/video/GifPlayer')
);

export interface TipProps {
  location: {
    search: string;
  };
  data: {
    tip: TipResource
  }
}

const Tip: FC<TipProps> = (
  {
    location,
    data: {
      tip
    }
  }) => {

  // #### TOPNAV/BOTTOMNAV The topNav/bottomNav when playlists are involved
  let bottomNav;
  let topNav;
  const currentPlaylist = getPlaylist(location, tip.inPlaylists);
  if (currentPlaylist) {
    // Now get prev/next
    const currentPlaylistItems = currentPlaylist.playlistItems;
    if (currentPlaylistItems) {
      const { previous, next } = getPrevNextBySlug(
        currentPlaylistItems.map(
          cpi => ({ slug: cpi.slug, label: cpi.title })
        ),
        tip.slug
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
        <TopNav parent={parent} siblings={siblings} currentSlug={tip.slug}
                playlistLabel={currentPlaylist.label} kind="Item" />
      ) : null;
    }
  }

  // ##### Twitter Card support
  const twitterCardPage: TwitterCardPage = {
    title: tip.title,
    description: tip.subtitle ? tip.subtitle : '',
    image: tip.thumbnail
        ? `https://www.jetbrains.com${tip.thumbnail.publicURL}`
        : tip.cardThumbnail
            ? `https://www.jetbrains.com${tip.cardThumbnail.publicURL}`
            : ''
  };

  // Videos
  const isSSR = typeof window === 'undefined';
  const animatedGif = tip.animatedGif;
  const screenshot = tip.screenshot;
  const shortVideo = tip.shortVideo;
  const longVideo = tip.longVideo;

  // ##### Sidebars
  const sidebar = <TipSidebar
    date={tip.date}
    author={tip.author}
    products={tip.products}
    technologies={tip.technologies}
    topics={tip.topics}
    body={tip.hasBody ? tip.body : undefined}
    seealso={tip.seealso}
    longVideo={tip.longVideo}
    inPlaylists={[]}
  />;

  const main = (
    <div style={{ marginBottom: '3rem' }}>
      <div className="columns">
        {!isSSR && animatedGif && (
          <React.Suspense fallback={<div />}>
            <ClientSideOnlyPlayer animatedGif={animatedGif} />
          </React.Suspense>
        )}
        {screenshot && (
          <img src={screenshot.publicURL} alt="Tip Screenshot" width="600" loading="lazy" style={{ objectFit: 'contain', objectPosition: 'top' }} />
        )}
        {shortVideo && <ShortVideo video={
          {
            posterURL: shortVideo.poster ? shortVideo.poster.publicURL : '',
            youtubeURL: shortVideo.url,
            posterNumber: shortVideo.posterNumber,
          }} />
        }
        <div
          className="column content"
          style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
        >
          <div dangerouslySetInnerHTML={{ __html: tip.leadin }} />
          <div>
            {tip.hasBody && (
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
      {tip.hasBody && (
        <Element name="in-depth" className="element" style={{ marginTop: '1rem' }}>
          <header className="is-size-3 is-bold">In Depth</header>
          <div className="columns">
            <div className="column is-11-desktop content">
              <MDXRenderer>{tip.body}</MDXRenderer>
            </div>
          </div>
        </Element>
      )}
      {tip.seealso && (
        <Element name="see-also" className="element" style={{ marginTop: '1rem' }}>
          <SeeAlso items={tip.seealso} />
        </Element>
      )}
      {longVideo && (
        <LongVideo video={
          {
            posterURL: longVideo.poster.publicURL,
            youtubeURL: longVideo.url,
          }} />
      )}

    </div>
  );
  return (
    <SidebarLayout
      pageTitle={tip.title}
      subtitle={tip.subtitle}
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
export default Tip;

export const query = graphql`query ($slug: String!) {
  tip(slug: {eq: $slug}) {
    label
    slug
    title
    subtitle
    slug
    hasBody
    body
    date(formatString: "YYYY-MM-DD")
    seealso {
      title
      href
    }
    inPlaylists {
      ...ListedPlaylistFragment
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
      publicURL,
        childImageSharp {
        resized: resize(width:96) {
          src
          width
          height
          originalName
        },
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    cardThumbnail {
      publicURL,
        childImageSharp {
        resized: resize(width:96) {
          src
          width
          height
          originalName
        },
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    animatedGif {
      file {
        publicURL
      }
      width
      height
    }
    screenshot {
      publicURL,
      childImageSharp {
        gatsbyImageData(width: 600, layout: FIXED)
      }
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

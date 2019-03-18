import { graphql } from 'gatsby';
import React from 'react';

import { Element, Link as ScrollLink } from 'react-scroll';
import SeeAlso from '../../components/SeeAlso';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarPlaylists from '../../components/sidebar/SidebarAppearingPlaylists';
import SidebarDoclinks, { IDoclink } from '../../components/sidebar/SidebarDoclinks';
import SidebarPublished from '../../components/sidebar/SidebarPublished';
import SidebarReferenceGroup from '../../components/sidebar/SidebarReferencesGroup';

import VideoPlayer from '../../components/VideoPlayer';
import { ITwitterCard } from '../../layouts/BaseLayout';
import SidebarLayout from '../../layouts/SidebarLayout';
import { IBaseResourceNode } from '../base_models';
import { IPlaylistEdges, IPlaylistNode } from '../playlists/models';
import BottomNav from '../tutorials/BottomNav';
import TopNav from '../tutorials/TopNav';
import { getPrevNextBySlug } from '../tutorials/utils';
import TipWrapper from './TipWrapper';

interface ITipProps {
  resource: any;
  author: any;
  playlist?: IPlaylistNode;
  playlistItems?: IBaseResourceNode[];
  appearingPlaylists?: IPlaylistEdges;
}

const Tip: React.FunctionComponent<ITipProps> = ({ resource: tip, author, playlist, playlistItems, appearingPlaylists }) => {
  const shortVideo = tip.shortVideo;
  const longVideo = tip.longVideo;
  const seealso = tip.seealso;
  const leadin = tip.leadin;
  const shortVideoJsOptions = {
    controls: true,
    poster: shortVideo.poster.publicURL,
    sources: [
      {
        src: shortVideo.url,
        type: 'video/youtube'
      }
    ]
  };
  const longVideoJsOptions = longVideo
    ? {
        controls: true,
        poster: longVideo.poster.publicURL,
        height: 720,
        width: 1024,
        sources: [
          {
            src: longVideo.url,
            type: 'video/youtube'
          }
        ]
      }
    : null;

  const links: IDoclink[] = [];
  if (tip.html) {
    links.push({ label: 'In Depth', target: 'in-depth' });
  }
  if (seealso) {
    links.push({ label: 'See Also', target: 'see-also' });
  }
  if (longVideo) {
    links.push({ label: 'Full Video', target: 'full-video' });
  }

  const sidebarPlaylists = appearingPlaylists
    ? appearingPlaylists.map(edge => {
        return { label: edge.node.frontmatter.title, slug: edge.node.fields.slug };
      })
    : undefined;

  const sidebar = (
    <Sidebar>
      {author && <SidebarPublished date={tip.date} author={author} />}
      <SidebarReferenceGroup reftype={`technologies`} accent={`danger`} references={tip.technologies} />
      <SidebarReferenceGroup reftype={`topics`} accent={`success`} references={tip.topics} />
      <SidebarDoclinks links={links} />
      {appearingPlaylists && appearingPlaylists.length > 1 && <SidebarPlaylists playlists={sidebarPlaylists} />}
    </Sidebar>
  );

  // Playlist support
  let topNav;
  let bottomNav;
  if (playlist && playlistItems) {
    const prevNext = getPrevNextBySlug(
      playlistItems.map(item => {
        return { label: item.frontmatter.title, slug: item.fields.slug };
      }),
      tip.slug
    );

    const navPrevious = prevNext.previous;
    const navNext = prevNext.next;
    const parent = playlist ? { label: playlist.frontmatter.title, slug: playlist.fields.slug } : null;
    const siblings = playlistItems.map(item => {
      return { label: item.frontmatter.title, slug: item.fields.slug };
    });
    topNav = parent ? (
      <TopNav parent={parent} siblings={siblings} currentSlug={tip.slug} playlistLabel={playlist.frontmatter.label} kind="Item" />
    ) : null;
    bottomNav = <BottomNav previous={navPrevious} next={navNext} playlistLabel={playlist.frontmatter.label} />;
  }

  const twitterCard: ITwitterCard = {
    title: tip.title,
    description: tip.subtitle,
    imageUrl: `https://www.jetbrains.com${tip.cardThumbnail.publicURL}`
  };

  return (
    <SidebarLayout title={tip.title} subtitle={tip.subtitle}>
      {{
        topNav,
        bottomNav,
        sidebar,
        twitterCard,
        main: (
          <div style={{ marginBottom: '3rem' }}>
            <div className="columns">
              <div className="column is-three-fifths">
                <VideoPlayer {...shortVideoJsOptions} />
              </div>
              <div
                className="column is-two-fifths content"
                style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
              >
                <div dangerouslySetInnerHTML={{ __html: leadin }} />
                {tip.html && (
                  <div>
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
                  </div>
                )}
              </div>
            </div>
            {tip.html && (
              <Element name="in-depth" className="element" style={{ marginTop: '1rem' }}>
                <header className="is-size-3 is-bold">In Depth</header>
                <div className="columns">
                  <div className="column is-11-desktop content" dangerouslySetInnerHTML={{ __html: tip.html }} />
                </div>
              </Element>
            )}
            {seealso && (
              <Element name="see-also" className="element" style={{ marginTop: '1rem' }}>
                <SeeAlso items={seealso} />
              </Element>
            )}
            {longVideoJsOptions && (
              <Element name="full-video" className="element" style={{ marginTop: '1rem' }}>
                <header className="is-size-3 is-bold">Full Video</header>
                <VideoPlayer {...longVideoJsOptions} />
              </Element>
            )}
          </div>
        )
      }}
    </SidebarLayout>
  );
};

export default TipWrapper(Tip);

export const query = graphql`
  query($path: String!) {
    tip: markdownRemark(fields: { slug: { eq: $path } }) {
      html
      fields {
        slug
      }
      frontmatter {
        type
        date(formatString: "MMMM Do, YYYY")
        title
        subtitle
        author
        technologies
        topics
        leadin
        cardThumbnail {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        seealso {
          title
          href
        }
        shortVideo {
          url
          poster {
            publicURL
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        longVideo {
          url
          poster {
            publicURL
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    authors: allMarkdownRemark(filter: { frontmatter: { type: { eq: "author" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            label
            headshot {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    resources: allMarkdownRemark {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            type
            date(formatString: "MMMM Do, YYYY")
            title
            subtitle
            author
            technologies
            topics
            thumbnail {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    playlists: allMarkdownRemark(filter: { frontmatter: { type: { eq: "playlist" } } }) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            label
            title
            items
          }
        }
      }
    }

    technologies: allMarkdownRemark(filter: { frontmatter: { type: { eq: "technology" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            label
          }
        }
      }
    }

    topics: allMarkdownRemark(filter: { frontmatter: { type: { eq: "topic" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            label
          }
        }
      }
    }
  }
`;

import { graphql, Link } from 'gatsby';
import React from 'react';

import { Element, Link as ScrollLink } from 'react-scroll';
import ResourceWrapper from '../../components/ResourceWrapper';
import SeeAlso from '../../components/SeeAlso';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarDoclinks, { IDoclink } from '../../components/sidebar/SidebarDoclinks';
import SidebarPublished from '../../components/sidebar/SidebarPublished';
import SidebarReferenceGroup from '../../components/sidebar/SidebarReferencesGroup';

import VideoPlayer from '../../components/VideoPlayer';
import { ITwitterCard } from '../../layouts/BaseLayout';
import SidebarLayout from '../../layouts/SidebarLayout';
import BottomNav from '../tutorials/BottomNav';

interface ITipProps {
  resource: any;
  author: any;
}

const Tip: React.FunctionComponent<ITipProps> = ({ resource: tip, author }) => {
  const shortVideo = tip.shortVideo;
  const longVideo = tip.longVideo;
  const seealso = tip.seealso;
  const leadin = tip.leadin;
  const shortVideoJsOptions = {
    controls: true,
    poster: shortVideo.poster.publicURL,
    techOrder: ['youtube'],
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
        techOrder: ['youtube'],
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

  const sidebar = (
    <Sidebar>
      {author && <SidebarPublished date={tip.date} author={author} />}
      <SidebarReferenceGroup reftype={`technologies`} accent={`danger`} references={tip.technologies} />
      <SidebarReferenceGroup reftype={`topics`} accent={`success`} references={tip.topics} />
      <SidebarDoclinks links={links} />
    </Sidebar>
  );

  const series = tip.series;
  const topNav = series ? (
    <div className="columns">
      <div className="column has-text-left is-one-quarter-desktop is-hidden-mobile">
        {series.previous && (
          <Link to={series.previous.slug} className="topnav-previous button" style={{ border: 'none' }} title={series.previous.label}>
            <span className="icon">
              <i className="fas fa-arrow-left" />
            </span>
            <span style={{ paddingLeft: '1em' }}>Previous</span>
          </Link>
        )}
      </div>
      <div className="column has-text-centered is-one-half is-full-mobile">
        <div>
          <div className="dropdown is-hoverable">
            <div className="dropdown-trigger" style={{ width: '20rem' }}>
              <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                <span>
                  Tip {series.position} of {series.total}
                </span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true" />
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu2" role="menu">
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <strong className="is-size-5">{series.title}</strong>
                </div>
                <hr className="dropdown-divider" />
                {series.all.map((step: any) => (
                  <Link to={step.slug} className="dropdown-item" key={step.slug}>
                    {step.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column has-text-right is-one-quarter-desktop is-hidden-mobile">
        {series.next && (
          <Link to={series.next.slug} className="topnav-previous button" style={{ border: 'none' }} title={series.next.label}>
            <span style={{ paddingLeft: '1em' }}>Next</span>
            <span className="icon">
              <i className="fas fa-arrow-right" />
            </span>
          </Link>
        )}
      </div>
    </div>
  ) : null;

  const bottomNav = series ? <BottomNav previous={series.previous} next={series.next} /> : null;
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
                  </div>
                )}
              </div>
            </div>
            {tip.html && (
              <Element name="in-depth" className="element" style={{ marginTop: '1rem' }}>
                <header className="is-size-3 is-bold">In Depth</header>
                <div className="columns">
                  <div className="column is-10-desktop content" dangerouslySetInnerHTML={{ __html: tip.html }} />
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

export default ResourceWrapper(Tip);

export const query = graphql`
  query($path: String!) {
    resource: markdownRemark(fields: { slug: { eq: $path } }) {
      excerpt(pruneLength: 250)
      html
      id
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
        series {
          title
          position
          total
          previous {
            label
            slug
          }
          next {
            label
            slug
          }
          all {
            label
            slug
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

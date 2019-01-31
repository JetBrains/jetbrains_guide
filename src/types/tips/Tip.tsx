import { graphql } from 'gatsby';
import React from 'react';

import { Element, Link } from 'react-scroll';
import ResourceWrapper from '../../components/ResourceWrapper';
import SeeAlso from '../../components/SeeAlso';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarDoclinks, { IDoclink } from '../../components/sidebar/SidebarDoclinks';
import SidebarPublished from '../../components/sidebar/SidebarPublished';
import SidebarReferenceGroup from '../../components/sidebar/SidebarReferencesGroup';

import VideoPlayer from '../../components/VideoPlayer';
import SidebarLayout from '../../layouts/SidebarLayout';

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

  return (
    <SidebarLayout title={tip.title} subtitle={tip.subtitle}>
      {{
        sidebar,
        main: (
          <>
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
                    <Link
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
                    </Link>
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
          </>
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

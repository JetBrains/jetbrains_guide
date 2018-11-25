import React, { Component } from 'react';

import { Element, Link } from 'react-scroll';

import { graphql } from 'gatsby';
import { ITip } from './models';
import VideoPlayer from '../../components/VideoPlayer';
import SidebarLayout from '../../layouts/SidebarLayout';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarPublished from '../../components/sidebar/SidebarPublished';
import SidebarReferenceGroup from '../../components/sidebar/SidebarReferencesGroup';
import SidebarDoclinks, { IDoclink } from '../../components/sidebar/SidebarDoclinks';

interface ITipProps {
  data: {
    markdownRemark: ITip;
  };
}

class Tip extends Component<ITipProps> {
  render() {
    const { data } = this.props;
    const tip = data.markdownRemark;
    const { frontmatter } = tip;
    const shortVideo = frontmatter.shortVideo;
    const longVideo = frontmatter.longVideo;
    const seealso = frontmatter.seealso;
    const leadin = frontmatter.leadin;
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

    const thisAuthor = tip.frontmatter.author;
    const author = {
      title: thisAuthor.frontmatter.title,
      headshot: thisAuthor.frontmatter.headshot,
      href: thisAuthor.fields.slug
    };

    const links: IDoclink[] = [];
    if (tip.html) {
      links.push({ label: 'In Depth', target: 'in-depth' });
    }
    if (frontmatter.seealso) {
      links.push({ label: 'See Also', target: 'see-also' });
    }
    if (longVideo) {
      links.push({ label: 'Full Video', target: 'full-video' });
    }

    const sidebar = (
      <Sidebar>
        <SidebarPublished date={frontmatter.date} author={author} />
        <SidebarReferenceGroup reftype={`technologies`} accent={`danger`} references={frontmatter.technologies} />
        <SidebarReferenceGroup reftype={`topics`} accent={`success`} references={frontmatter.topics} />
        <SidebarDoclinks links={links} />
      </Sidebar>
    );
    return (
      <SidebarLayout title={frontmatter.title} subtitle={frontmatter.subtitle} sidebar={sidebar}>
        {tip ? (
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
                <>
                  <header className="is-size-3 is-bold">See Also</header>
                  <div className="content">
                    <ul>
                      {seealso.map(see => (
                        <li key={see.href}>
                          <a href={see.href}>{see.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              </Element>
            )}
            {longVideoJsOptions && (
              <Element name="full-video" className="element" style={{ marginTop: '1rem' }}>
                <header className="is-size-3 is-bold">Full Video</header>
                <VideoPlayer {...longVideoJsOptions} />
              </Element>
            )}
          </>
        ) : null}
      </SidebarLayout>
    );
  }
}

export default Tip;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
        technologies
        author {
          excerpt(pruneLength: 250)
          html
          id
          fields {
            slug
          }
          frontmatter {
            type
            label
            title
            subtitle
            date
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
  }
`;

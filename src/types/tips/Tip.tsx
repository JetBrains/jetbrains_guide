import React, { Component } from 'react';

import { Link, Element } from 'react-scroll';

import { graphql } from 'gatsby';
import { ITip } from './models';
import VideoPlayer from '../../components/VideoPlayer';
import { IAuthor, IAuthorEdges } from '../authors/models';
import SidebarLayout from '../../layouts/sidebar';

interface ITipProps {
  data: {
    markdownRemark: ITip;
    authors: {
      edges: IAuthorEdges;
    };
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
    const longVideoJsOptions = {
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
    };
    const authors = data.authors.edges.map(edge => edge.node);
    const authorRef = authors.find(a => a.frontmatter.label === frontmatter.author) as IAuthor;
    const author = {
      title: authorRef.frontmatter.title,
      headshot: authorRef.frontmatter.headshot,
      href: `/authors/${authorRef.frontmatter.label}`
    };
    const sidebar = {
      published: {
        author,
        date: frontmatter.date
      },
      technologies: frontmatter.technologies,
      topics: frontmatter.topics
    };
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
              </div>
            </div>
            <Element name="in-depth" className="element" style={{ marginTop: '1rem' }}>
              <header className="is-size-3 is-bold">In Depth</header>
              <div className="columns">
                <div className="column is-10-desktop content" dangerouslySetInnerHTML={{ __html: tip.html }} />
              </div>
            </Element>
            <Element name="see-also" className="element" style={{ marginTop: '1rem' }}>
              {seealso && (
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
              )}
            </Element>
            <Element name="full-video" className="element" style={{ marginTop: '1rem' }}>
              <header className="is-size-3 is-bold">Full Video</header>
              <VideoPlayer {...longVideoJsOptions} />
            </Element>
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
      frontmatter {
        type
        date(formatString: "MMMM Do, YYYY")
        path
        title
        subtitle
        technologies
        author
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

    authors: allMarkdownRemark(filter: { frontmatter: { type: { eq: "author" } } }, limit: 1000) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
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
      }
    }
  }
`;

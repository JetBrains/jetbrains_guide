import React, { Component } from 'react';

import { Link, Element } from 'react-scroll';

import { graphql } from 'gatsby';
import { ITutorial } from './models';
import VideoPlayer from '../../components/VideoPlayer';
import { IAuthor, IAuthorEdges } from '../authors/models';
import SidebarLayout from '../../layouts/SidebarLayout';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarPublished from '../../components/sidebar/SidebarPublished';
import SidebarReferenceGroup from '../../components/sidebar/SidebarReferencesGroup';
import SidebarDoclinks, { IDoclink } from '../../components/sidebar/SidebarDoclinks';
import SidebarSteps, { IStep } from '../../components/sidebar/SidebarSteps';

interface ITutorialProps {
  data: {
    markdownRemark: ITutorial;
    tutorialsteps: {
      edges: ITutorialStepEdges;
    };
    authors: {
      edges: IAuthorEdges;
    };
  };
}

class Tutorial extends Component<ITutorialProps> {
  render() {
    const { data } = this.props;
    const tutorial = data.markdownRemark;
    const { frontmatter } = tutorial;
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

    // Tutorialsteps

    // First, make a mapping of slug -> tutorialstep
    const allTutorialSteps: { [index: string]: string } = {};
    data.tutorialsteps.edges.forEach(edge => {
      const node = edge.node;
      allTutorialSteps[node.fields.slug] = node.frontmatter.title;
    });

    // Now convert the list of frontmatter step slugs into actual step info
    const thisSlug = data.markdownRemark.fields.slug;
    const steps: IStep[] = frontmatter.steps.map(stepSlug => {
      const fullStepSlug = `${thisSlug + stepSlug}/`;
      return {
        target: fullStepSlug,
        label: allTutorialSteps[fullStepSlug]
      };
    });

    // Authors
    const authors = data.authors.edges.map(edge => edge.node);
    const authorRef = authors.find(a => a.frontmatter.label === frontmatter.author) as IAuthor;
    const author = {
      title: authorRef.frontmatter.title,
      headshot: authorRef.frontmatter.headshot,
      href: authorRef.fields.slug
    };

    const links: IDoclink[] = [];
    if (tutorial.html) {
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
        <SidebarSteps steps={steps} />
      </Sidebar>
    );
    return (
      <SidebarLayout title={frontmatter.title} subtitle={frontmatter.subtitle} sidebar={sidebar}>
        {tutorial ? (
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
                {tutorial.html && (
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
            {tutorial.html && (
              <Element name="in-depth" className="element" style={{ marginTop: '1rem' }}>
                <header className="is-size-3 is-bold">In Depth</header>
                <div className="columns">
                  <div className="column is-10-desktop content" dangerouslySetInnerHTML={{ __html: tutorial.html }} />
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

export default Tutorial;

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
        steps
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
      }
    }
  }
`;

import { graphql } from 'gatsby';
import React, { Component } from 'react';

import { Element } from 'react-scroll';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarPublished from '../../components/sidebar/SidebarPublished';
import SidebarReferenceGroup from '../../components/sidebar/SidebarReferencesGroup';
import SidebarSteps, { IStep } from '../../components/sidebar/SidebarSteps';
import SidebarLayout from '../../layouts/SidebarLayout';
import BottomNav from './BottomNav';
import { ITutorialStepNode } from './models';
import TopNav from './TopNav';
import { getPrevNextBySlug } from './utils';

interface ITutorialStepProps {
  data: {
    markdownRemark: ITutorialStepNode;
  };
}

class TutorialStep extends Component<ITutorialStepProps> {
  render() {
    const { data } = this.props;
    const tutorialStep = data.markdownRemark;
    const { fields, frontmatter } = tutorialStep;
    const { tutorial } = fields;
    const { tutorialsteps } = tutorial.fields;

    // Flatten into the minimum needed for the sidebar steps component
    const sidebarSteps: IStep[] = tutorialsteps.map(step => {
      return {
        target: step.fields.slug,
        label: step.frontmatter.title
      };
    });

    const thisAuthor = fields.author;
    const author = {
      title: thisAuthor.frontmatter.title,
      headshot: thisAuthor.frontmatter.headshot,
      href: thisAuthor.fields.slug
    };
    const sidebar = (
      <Sidebar>
        <SidebarPublished date={frontmatter.date} author={author} />
        <SidebarReferenceGroup reftype={`technologies`} accent={`danger`} references={frontmatter.technologies} />
        <SidebarReferenceGroup reftype={`topics`} accent={`success`} references={frontmatter.topics} />
        <SidebarSteps currentSlug={tutorialStep.fields.slug} steps={sidebarSteps} />
      </Sidebar>
    );

    // Up, Previous, Next
    const navUp = { label: tutorial.frontmatter.title, slug: tutorial.fields.slug };
    const prevNext = getPrevNextBySlug(
      tutorial.fields.tutorialsteps.map(step => {
        return { label: step.frontmatter.title, slug: step.fields.slug };
      }),
      tutorialStep.fields.slug
    );

    const navPrevious = prevNext.previous;
    const navNext = prevNext.next;

    return (
      <SidebarLayout
        topNav={<TopNav up={navUp} previous={navPrevious} next={navNext} />}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        sidebar={sidebar}
        bottomNav={<BottomNav previous={navPrevious} next={navNext} />}
      >
        {tutorialStep ? (
          <>
            {tutorialStep.html && (
              <Element name="in-depth" className="element" style={{ marginTop: '1rem' }}>
                <header className="is-size-3 is-bold">In Depth</header>
                <div className="columns">
                  <div className="column is-10-desktop content" dangerouslySetInnerHTML={{ __html: tutorialStep.html }} />
                </div>
              </Element>
            )}
          </>
        ) : null}
      </SidebarLayout>
    );
  }
}

export default TutorialStep;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 250)
      html
      id
      fields {
        slug
        tutorial {
          frontmatter {
            title
          }
          fields {
            slug
            tutorialsteps {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
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
      }
      frontmatter {
        type
        date(formatString: "MMMM Do, YYYY")
        title
        subtitle
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
  }
`;

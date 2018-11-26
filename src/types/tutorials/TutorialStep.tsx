import React, { Component } from 'react';

import { Element } from 'react-scroll';

import { graphql } from 'gatsby';
import { ITutorialStep } from './models';
import SidebarLayout from '../../layouts/SidebarLayout';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarPublished from '../../components/sidebar/SidebarPublished';
import SidebarReferenceGroup from '../../components/sidebar/SidebarReferencesGroup';

interface ITutorialStepProps {
  data: {
    markdownRemark: ITutorialStep;
  };
}

class TutorialStep extends Component<ITutorialStepProps> {
  render() {
    const { data } = this.props;
    const tutorialStep = data.markdownRemark;
    const { frontmatter } = tutorialStep;

    const thisAuthor = tutorialStep.fields.author;
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
      </Sidebar>
    );
    return (
      <SidebarLayout title={frontmatter.title} subtitle={frontmatter.subtitle} sidebar={sidebar}>
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

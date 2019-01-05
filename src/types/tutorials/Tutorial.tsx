import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarPublished from '../../components/sidebar/SidebarPublished';
import SidebarReferenceGroup from '../../components/sidebar/SidebarReferencesGroup';
import SidebarSteps, { IStep } from '../../components/sidebar/SidebarSteps';
import SidebarLayout from '../../layouts/SidebarLayout';
import { ITutorialNode } from './models';
import StepsListing from './StepsListing';

interface ITutorialProps {
  data: {
    markdownRemark: ITutorialNode;
  };
}

class Tutorial extends Component<ITutorialProps> {
  render() {
    const { data } = this.props;
    const tutorial = data.markdownRemark;
    const { frontmatter } = tutorial;
    const { tutorialsteps } = tutorial.fields;

    // Flatten into the minimum needed for the sidebar steps component
    const sidebarSteps: IStep[] = tutorialsteps.map(step => {
      return {
        target: step.fields.slug,
        label: step.frontmatter.title
      };
    });

    const thisAuthor = tutorial.fields.author;
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
        <SidebarSteps steps={sidebarSteps} />
      </Sidebar>
    );
    return (
      <SidebarLayout title={frontmatter.title} subtitle={frontmatter.subtitle} sidebar={sidebar}>
        <>
          {tutorial.html ? (
            <div className="columns">
              <div className="column is-10-desktop content" dangerouslySetInnerHTML={{ __html: tutorial.html }} />
            </div>
          ) : null}
          <StepsListing steps={tutorialsteps} />
        </>
      </SidebarLayout>
    );
  }
}

export default Tutorial;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
        tutorialsteps {
          fields {
            slug
            technologies {
              fields {
                slug
              }
              frontmatter {
                label
              }
            }
            topics {
              fields {
                slug
              }
              frontmatter {
                label
              }
            }
            author {
              fields {
                slug
              }
              frontmatter {
                title
                subtitle
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
            date(formatString: "MMMM Do, YYYY")
            title
            subtitle
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
        author {
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
        steps
        technologies
        topics
      }
    }
  }
`;

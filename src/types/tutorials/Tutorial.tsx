import React, { Component } from 'react';

import { graphql } from 'gatsby';
import { ITutorialNode, ITutorialStep, ITutorialStepEdges } from './models';
import SidebarLayout from '../../layouts/SidebarLayout';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarPublished from '../../components/sidebar/SidebarPublished';
import SidebarReferenceGroup from '../../components/sidebar/SidebarReferencesGroup';
import SidebarSteps, { IStep } from '../../components/sidebar/SidebarSteps';
import StepsListing from './StepsListing';

interface ITutorialProps {
  data: {
    markdownRemark: ITutorialNode;
    tutorialsteps: {
      edges: ITutorialStepEdges;
    };
  };
}

class Tutorial extends Component<ITutorialProps> {
  render() {
    const { data } = this.props;
    const tutorial = data.markdownRemark;
    const { frontmatter } = tutorial;

    // Tutorialsteps

    // First, make a mapping of slug -> tutorialstep
    const allTutorialSteps: { [index: string]: ITutorialStep } = {};
    data.tutorialsteps.edges.forEach(edge => {
      const node = edge.node;
      allTutorialSteps[node.fields.slug] = node;
    });

    // Get array of tutorialsteps that are "in" this tutorial
    const thisSlug = data.markdownRemark.fields.slug;
    const theseSteps = frontmatter.steps.map(stepSlug => {
      const fullStepSlug = `${thisSlug + stepSlug}/`;
      return allTutorialSteps[fullStepSlug];
    });

    // Flatten into the minimum needed for the sidebar steps component
    const sidebarSteps: IStep[] = frontmatter.steps.map(stepSlug => {
      const fullStepSlug = `${thisSlug + stepSlug}/`;
      return {
        target: fullStepSlug,
        label: allTutorialSteps[fullStepSlug].frontmatter.title
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
          <StepsListing steps={theseSteps} />
        </>
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
        steps
        technologies
        topics
      }
    }

    tutorialsteps: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "tutorialstep" } } }
      limit: 1000
    ) {
      edges {
        node {
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
  }
`;

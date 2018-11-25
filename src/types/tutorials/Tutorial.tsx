import React, { Component } from 'react';

import { graphql } from 'gatsby';
import { ITutorial, ITutorialStep, ITutorialStepEdges } from './models';
import { IAuthor, IAuthorEdges } from '../authors/models';
import SidebarLayout from '../../layouts/SidebarLayout';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarPublished from '../../components/sidebar/SidebarPublished';
import SidebarReferenceGroup from '../../components/sidebar/SidebarReferencesGroup';
import SidebarSteps, { IStep } from '../../components/sidebar/SidebarSteps';
import StepsListing from './StepsListing';

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

    // Authors
    const authors = data.authors.edges.map(edge => edge.node);
    const authorRef = authors.find(a => a.frontmatter.label === frontmatter.author) as IAuthor;
    const author = {
      title: authorRef.frontmatter.title,
      headshot: authorRef.frontmatter.headshot,
      href: authorRef.fields.slug
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

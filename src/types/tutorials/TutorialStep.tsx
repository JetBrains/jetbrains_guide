import React, { Component } from 'react';

import { Element } from 'react-scroll';

import { graphql } from 'gatsby';
import { ITutorialStep } from './models';
import { IAuthor, IAuthorEdges } from '../authors/models';
import SidebarLayout from '../../layouts/SidebarLayout';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarPublished from '../../components/sidebar/SidebarPublished';
import SidebarReferenceGroup from '../../components/sidebar/SidebarReferencesGroup';

interface ITutorialStepProps {
  data: {
    markdownRemark: ITutorialStep;
    authors: {
      edges: IAuthorEdges;
    };
  };
}

class TutorialStep extends Component<ITutorialStepProps> {
  render() {
    const { data } = this.props;
    const tutorialStep = data.markdownRemark;
    const { frontmatter } = tutorialStep;
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
      }
      frontmatter {
        type
        date(formatString: "MMMM Do, YYYY")
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

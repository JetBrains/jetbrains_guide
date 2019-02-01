import { graphql } from 'gatsby';
import React from 'react';
import StepsListing from './StepsListing';
import TutorialWrapper from './TutorialWrapper';

import SidebarLayout from '../../layouts/SidebarLayout';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarPublished from '../../components/sidebar/SidebarPublished';
import SidebarReferenceGroup from '../../components/sidebar/SidebarReferencesGroup';

// import { ITutorialNode } from './models';
// import StepsListing from '../../../tmp/tutorials/StepsListing';

interface ITutorialProps {
  resource: any;
  author: any;
  tutorialSteps: any;
}

const Tutorial: React.FunctionComponent<ITutorialProps> = ({ resource: tutorial, author, tutorialSteps }) => {
  console.log(94922, 'tutorialsteps', tutorialSteps);

  const sidebar = (
    <Sidebar>
      {author && <SidebarPublished date={tutorial.date} author={author} />}
      <SidebarReferenceGroup reftype={`technologies`} accent={`danger`} references={tutorial.technologies} />
      <SidebarReferenceGroup reftype={`topics`} accent={`success`} references={tutorial.topics} />
    </Sidebar>
  );

  return (
    <SidebarLayout title={tutorial.title} subtitle={tutorial.subtitle}>
      {{
        sidebar,
        main: (
          <>
            {tutorial.html ? (
              <div className="columns">
                <div className="column is-10-desktop content" dangerouslySetInnerHTML={{ __html: tutorial.html }} />
              </div>
            ) : null}
            <StepsListing steps={tutorialSteps} />
          </>
        )
      }}
    </SidebarLayout>
  );
};

export default TutorialWrapper(Tutorial);

// interface ITutorialProps {
//   data: {
//     markdownRemark: ITutorialNode;
//   };
// }
//
// class Tutorial extends Component<ITutorialProps> {
//   render() {
//     const { data } = this.props;
//     const tutorial = data.markdownRemark;
//     const { frontmatter } = tutorial;
//     const { tutorialsteps } = tutorial.fields;
//
//     // Flatten into the minimum needed for the sidebar steps component
//     const sidebarSteps: IStep[] = tutorialsteps.map(step => {
//       return {
//         target: step.fields.slug,
//         label: step.frontmatter.title
//       };
//     });
//
//     const thisAuthor = tutorial.fields.author;
//     const author = {
//       title: thisAuthor.frontmatter.title,
//       headshot: thisAuthor.frontmatter.headshot,
//       href: thisAuthor.fields.slug
//     };
//
//     const sidebar = (
//       <Sidebar>
//         <SidebarPublished date={frontmatter.date} author={author} />
//         <SidebarReferenceGroup reftype={`technologies`} accent={`danger`} references={frontmatter.technologies} />
//         <SidebarReferenceGroup reftype={`topics`} accent={`success`} references={frontmatter.topics} />
//         <SidebarSteps steps={sidebarSteps} />
//       </Sidebar>
//     );
//     return (
//       <SidebarLayout title={frontmatter.title} subtitle={frontmatter.subtitle} sidebar={sidebar}>
//         <>
//           {tutorial.html ? (
//             <div className="columns">
//               <div className="column is-10-desktop content" dangerouslySetInnerHTML={{ __html: tutorial.html }} />
//             </div>
//           ) : null}
//           <StepsListing steps={tutorialsteps} />
//         </>
//       </SidebarLayout>
//     );
//   }
// }
//
// export default Tutorial;

export const query = graphql`
  query($path: String!) {
    resource: markdownRemark(fields: { slug: { eq: $path } }) {
      html
      fields {
        slug
      }
      frontmatter {
        type
        date(formatString: "MMMM Do, YYYY")
        title
        subtitle
        steps
        author
        technologies
        topics
      }
    }

    tutorialsteps: allMarkdownRemark(filter: { frontmatter: { type: { eq: "tutorialstep" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            author
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

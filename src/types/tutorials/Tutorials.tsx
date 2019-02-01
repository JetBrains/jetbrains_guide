import * as React from 'react';

import { graphql } from 'gatsby';
import ListingWrapper from '../../components/ListingWrapper';

import ReferenceLayout from '../../layouts/ReferenceLayout';
import ResourceCard from '../../components/ResourceCard';

// export interface ITutorialProps {
//   data: {
//     tutorials: {
//       edges: ITutorialEdges;
//     };
//     technologies: {
//       edges: ITechnologyEdges;
//     };
//   };
// }

interface ITutorialsProps {
  resources: any[];
}

const Tutorials: React.FunctionComponent<ITutorialsProps> = ({ resources }) => {
  return (
    <ReferenceLayout title="Tutorials" subtitle="Resources organized by programming technologies">
      {{
        listing: (
          <div>
            {resources &&
              resources.map(r => {
                return <ResourceCard key={r.slug} {...r} />;
              })}
          </div>
        )
      }}
    </ReferenceLayout>
  );
};

export default ListingWrapper(Tutorials);

// const Tutorials: React.SFC<ITutorialProps> = ({ data }) => {
//   const items = data.tutorials.edges.map(edge => edge.node);
//   return (
//     <DefaultLayout title="Tutorials" subtitle="Resources organized by programming technologies">
//       <div className="columns">
//         <div className="column is-three-quarters-desktop bio-resourcecards">
//           {items &&
//             items.map(item => {
//               const frontmatter = item.frontmatter;
//               const fields = item.fields;
//               const href = item.fields.slug;
//
//               // Use the first technology's icon as the logo
//               const thumbnail = frontmatter.thumbnail;
//
//               const thisAuthor = item.fields.author;
//               const author = {
//                 title: thisAuthor.frontmatter.title,
//                 headshot: thisAuthor.frontmatter.headshot,
//                 href: thisAuthor.fields.slug
//               };
//               return (
//                 <ResourceCard
//                   key={href}
//                   title={frontmatter.title}
//                   subtitle={frontmatter.subtitle}
//                   technologies={fields.technologies}
//                   topics={fields.topics}
//                   href={href}
//                   thumbnail={thumbnail}
//                   author={author}
//                   date={frontmatter.date}
//                 />
//               );
//             })}
//         </div>
//       </div>
//     </DefaultLayout>
//   );
// };

// export default Tutorials;

export const query = graphql`
  query {
    resources: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "tutorial" } } }
      limit: 1000
    ) {
      edges {
        node {
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

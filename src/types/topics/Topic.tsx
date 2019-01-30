import { graphql } from 'gatsby';
import IconLayoutListing from '../../components/IconLayoutListing';
import ListingWrapper from '../../components/ListingWrapper';

export default ListingWrapper(IconLayoutListing);

export const query = graphql`
  query($path: String!) {
    resource: markdownRemark(fields: { slug: { eq: $path } }) {
      excerpt(pruneLength: 250)
      html
      frontmatter {
        type
        label
        title
        subtitle
        accent
        icon
        date
      }
    }

    resources: allMarkdownRemark(filter: { frontmatter: { type: { eq: "tip" } } }) {
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

// import { graphql } from 'gatsby';
// import * as React from 'react';
// import { Element } from 'react-scroll/modules';
// import IconLayout from '../../layouts/icon';
// import ResourceCard from '../../src/components/ResourceCard';
// import SeeAlso from '../../src/components/SeeAlso';
//
// import { ITopicNode } from './models';
//
// interface ITopicProps {
//   data: {
//     topic: ITopicNode;
//   };
// }
//
// const Topic: React.FunctionComponent<ITopicProps> = ({ data: { topic } }) => {
//   const { title, subtitle, seealso } = topic.frontmatter;
//
//   const resources = topic.fields.tips;
//
//   return (
//     <IconLayout title={title} subtitle={subtitle}>
//       <div className="columns">
//         <div className="column bd-content is-three-quarters-desktop content" dangerouslySetInnerHTML={{ __html: topic.html }} />
//       </div>
//       <div className="columns">
//         <nav className="column is-three-quarters-desktop bio-resourcecards">
//           {resources &&
//             resources.map(resource => {
//               const rfm = resource.frontmatter;
//               const fields = resource.fields;
//               const href = fields.slug;
//               const thisAuthor = fields.author;
//               const author = thisAuthor
//                 ? {
//                     title: thisAuthor.frontmatter.title,
//                     headshot: thisAuthor.frontmatter.headshot,
//                     href: thisAuthor.fields.slug
//                   }
//                 : undefined;
//               const thumbnail = rfm.thumbnail;
//               return (
//                 <ResourceCard
//                   key={href}
//                   title={rfm.title}
//                   subtitle={rfm.subtitle}
//                   technologies={fields.technologies}
//                   topics={fields.topics}
//                   href={href}
//                   thumbnail={thumbnail}
//                   author={author}
//                   date={rfm.date}
//                 />
//               );
//             })}
//           {seealso && (
//             <Element name="see-also" className="element" style={{ marginTop: '1rem' }}>
//               <SeeAlso items={seealso} />
//             </Element>
//           )}
//         </nav>
//       </div>
//     </IconLayout>
//   );
// };
//
// export default Topic;
//
// export const query = graphql`
//   query($slug: String!) {
//     topic: markdownRemark(fields: { slug: { eq: $slug } }) {
//       excerpt(pruneLength: 250)
//       html
//       id
//       fields {
//         slug
//         tips {
//           excerpt(pruneLength: 250)
//           html
//           id
//           fields {
//             slug
//             technologies {
//               fields {
//                 slug
//               }
//               frontmatter {
//                 label
//               }
//             }
//             topics {
//               fields {
//                 slug
//               }
//               frontmatter {
//                 label
//               }
//             }
//             author {
//               excerpt(pruneLength: 250)
//               html
//               id
//               fields {
//                 slug
//               }
//               frontmatter {
//                 type
//                 label
//                 title
//                 subtitle
//                 date
//                 seealso {
//                   title
//                   href
//                 }
//                 headshot {
//                   publicURL
//                   childImageSharp {
//                     fluid(maxWidth: 1000) {
//                       ...GatsbyImageSharpFluid
//                     }
//                   }
//                 }
//               }
//             }
//           }
//           frontmatter {
//             type
//             date(formatString: "MMMM Do, YYYY")
//             title
//             subtitle
//             thumbnail {
//               publicURL
//               childImageSharp {
//                 fluid(maxWidth: 1000) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//       frontmatter {
//         type
//         label
//         title
//         subtitle
//         date
//         seealso {
//           title
//           href
//         }
//       }
//     }
//   }
// `;

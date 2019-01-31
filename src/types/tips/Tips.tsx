

// import * as React from 'react';
//
// import { graphql } from 'gatsby';
//
// import DefaultLayout from '../../src/layouts/default';
// import ResourceCard from '../../src/components/ResourceCard';
//
// import { ITipEdges } from '../../src/types/tips/models';
//
// export interface ITipsProps {
//   data: {
//     tips: {
//       edges: ITipEdges;
//     };
//   };
// }
//
// const Tips: React.SFC<ITipsProps> = ({ data: { tips } }) => {
//   const items = tips.edges.map(edge => edge.node);
//   return (
//     <DefaultLayout title="Tips" subtitle="Resources organized by programming technologies">
//       <div className="columns">
//         <div className="column is-three-quarters-desktop bio-resourcecards">
//           {items &&
//             items.map(item => {
//               const frontmatter = item.frontmatter;
//               const fields = item.fields;
//               const href = fields.slug;
//
//               const thumbnail = frontmatter.thumbnail;
//
//               // @ts-ignore
//               const thisAuthor = item.fields.author;
//               const author = thisAuthor
//                 ? {
//                     title: thisAuthor.frontmatter.title,
//                     headshot: thisAuthor.frontmatter.headshot,
//                     href: thisAuthor.fields.slug
//                   }
//                 : undefined;
//               return (
//                 <ResourceCard
//                   key={href}
//                   title={frontmatter.title}
//                   subtitle={frontmatter.subtitle}
//                   technologies={fields.technologies}
//                   topics={fields.topics}
//                   href={href}
//                   author={author}
//                   thumbnail={thumbnail}
//                   date={frontmatter.date}
//                 />
//               );
//             })}
//         </div>
//       </div>
//     </DefaultLayout>
//   );
// };
//
// export default Tips;
//
// export const query = graphql`
//   query {
//     tips: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { type: { eq: "tip" } } }) {
//       edges {
//         node {
//           excerpt(pruneLength: 250)
//           html
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             type
//             date(formatString: "MMMM Do, YYYY")
//             title
//             subtitle
//             author
//             technologies
//             topics
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
//     }
//
//     technologies: allMarkdownRemark(filter: { frontmatter: { type: { eq: "technology" } } }) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             label
//           }
//         }
//       }
//     }
//
//     topics: allMarkdownRemark(filter: { frontmatter: { type: { eq: "topic" } } }) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             label
//           }
//         }
//       }
//     }
//   }
// `;

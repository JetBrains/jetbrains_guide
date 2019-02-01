import { graphql } from 'gatsby';
import * as React from 'react';
import { SubsectionAuthor } from '../../components/Subsection';
import ReferenceLayout from '../../layouts/ReferenceLayout';
import { IAuthorEdges } from './models';

interface IAuthorsProps {
  data: {
    allMarkdownRemark: {
      edges: IAuthorEdges;
    };
  };
}

const Authors: React.FunctionComponent<IAuthorsProps> = ({
  data: {
    allMarkdownRemark: { edges: authorEdges }
  }
}) => {
  const items = authorEdges.map(edge => edge.node);
  return (
    <ReferenceLayout title="Authors" subtitle="Resources organized by author">
      {{
        listing: (
          <nav className="bd-links bio-resourcecards">
            {items &&
              items.map(item => {
                return (
                  <SubsectionAuthor
                    key={item.fields.slug}
                    title={item.frontmatter.title}
                    subtitle={item.frontmatter.subtitle}
                    href={item.fields.slug}
                    headshot={item.frontmatter.headshot}
                  />
                );
              })}
          </nav>
        )
      }}
    </ReferenceLayout>
  );
};

export default Authors;

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "author" } } }
      limit: 1000
    ) {
      edges {
        node {
          html
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

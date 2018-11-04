import * as React from 'react';

import { graphql } from 'gatsby';

import { IAuthorEdges } from './models';
import DefaultLayout from '../../layouts/default';
import { SubsectionAuthor } from '../../components/Subsection';

interface IAuthorsProps {
  data: {
    allMarkdownRemark: {
      edges: IAuthorEdges;
    };
  };
}

const Authors: React.SFC<IAuthorsProps> = ({ data }) => {
  const items = data.allMarkdownRemark.edges.map(edge => edge.node);
  return (
    <DefaultLayout title="Authors"
                   subtitle="Resources organized by author">
      <nav className="bd-links bio-resourcecards">
        {items && items.map(item => {
            const frontmatter = item.frontmatter;
            const href = '/authors/' + frontmatter.label;
            return (
              <SubsectionAuthor
                key={href}
                title={item.frontmatter.title}
                subtitle={item.frontmatter.subtitle}
                href={href}
                headshot={item.frontmatter.headshot}
              />
            );
          }
        )}
      </nav>
    </DefaultLayout>
  );
};

export default Authors;

export const query = graphql`
  query {
    allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {frontmatter: {type: {eq: "author"}}}
          limit: 1000
        ) {
            edges {
              node {
                excerpt(pruneLength: 250)
                html
                id
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
    }`;

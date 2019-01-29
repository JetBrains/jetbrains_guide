import { graphql } from 'gatsby';
import * as React from 'react';
import { SubsectionTechnology } from '../../components/Subsection';
import DefaultLayout from '../../layouts/default';

import { ITechnologyEdges } from './models';

interface ITechnologiesProps {
  data: {
    allMarkdownRemark: {
      edges: ITechnologyEdges;
    };
  };
}

const DEFAULT_LOGO = 'https://cdn.worldvectorlogo.com/logos/python-5.svg';

const Technologies: React.FunctionComponent<ITechnologiesProps> = ({
  data: {
    allMarkdownRemark: { edges: technologyEdges }
  }
}) => {
  const items = technologyEdges.map(edge => edge.node);
  return (
    <DefaultLayout title="Technologies" subtitle="Resources organized by programming technologies">
      <nav className="bd-links bio-resourcecards">
        {items &&
          items.map(item => {
            const frontmatter = item.frontmatter;
            const href = item.fields.slug;
            const logo = frontmatter.logo.publicURL ? frontmatter.logo.publicURL : DEFAULT_LOGO;
            return (
              <SubsectionTechnology
                key={href}
                title={item.frontmatter.title}
                subtitle={item.frontmatter.subtitle}
                href={href}
                logo={logo}
              />
            );
          })}
      </nav>
    </DefaultLayout>
  );
};

export default Technologies;

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "technology" } } }
      limit: 1000
    ) {
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
            logo {
              publicURL
            }
          }
        }
      }
    }
  }
`;

import * as React from 'react';

import { graphql } from 'gatsby';

import { ITechnologyEdges } from './models';
import DefaultLayout from '../../layouts/default';
import { SubsectionTechnology } from '../../components/Subsection';

interface ITechnologiesProps {
  data: {
    allMarkdownRemark: {
      edges: ITechnologyEdges;
    };
  };
}

const DEFAULT_LOGO = 'https://cdn.worldvectorlogo.com/logos/python-5.svg';

const Technologies: React.SFC<ITechnologiesProps> = ({ data }) => {
  const items = data.allMarkdownRemark.edges.map(edge => edge.node);
  return (
    <DefaultLayout title="Technologies" subtitle="Resources organized by programming technologies">
      <nav className="bd-links bio-resourcecards">
        {items &&
          items.map(item => {
            const frontmatter = item.frontmatter;
            const href = '/technologies/' + frontmatter.label;
            const logo = frontmatter.logo ? frontmatter.logo : DEFAULT_LOGO;
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
          frontmatter {
            type
            label
            title
            subtitle
            date
            logo
          }
        }
      }
    }
  }
`;

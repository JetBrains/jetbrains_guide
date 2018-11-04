import * as React from 'react';
import { ITopicEdges } from './models';
import DefaultLayout from '../../layouts/default';
import { graphql } from 'gatsby';
import { SubsectionTopic } from '../../components/Subsection';

interface ITopicsProps {
  data: {
    allMarkdownRemark: {
      edges: ITopicEdges;
    };
  };
}

const Topics: React.SFC<ITopicsProps> = ({ data }) => {
  const items = data.allMarkdownRemark.edges.map(edge => edge.node);
  return (
    <DefaultLayout title="Topics" subtitle="Resources organized by programming topics">
      <nav className="bd-links bio-resourcecards">
        {items &&
          items.map(item => {
            const frontmatter = item.frontmatter;
            const href = `/topics/${frontmatter.label}`;
            return (
              <SubsectionTopic
                key={href}
                title={item.frontmatter.title}
                subtitle={item.frontmatter.subtitle}
                href={href}
                accent={item.frontmatter.accent}
                icon={item.frontmatter.icon}
              />
            );
          })}
      </nav>
    </DefaultLayout>
  );
};

export default Topics;

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "topic" } } }
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
            accent
            icon
          }
        }
      }
    }
  }
`;

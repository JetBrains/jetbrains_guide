import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import SubsectionTopic from 'gatsby-theme-bulmaio/src/components/subsections/SubsectionTopic';

interface TopicsProps {
  allTopicYaml: {
    nodes: {
      label: string;
      title: string;
      subtitle?: string;
      accent: string;
      icon: string;
    }[]
  }
}

export const Topics = () => {
  const
    { allTopicYaml: { nodes } }: TopicsProps = useStaticQuery(
      graphql`
  query {
    allTopicYaml(sort: {fields: [title]}, limit: 1000) {
      nodes {
        label
        title
        subtitle
        accent
        icon
      }
    }
  }
`
    );
  return (
    <ReferenceLayout pageTitle={'Topics'} subtitle={'Resources organized by programming topic'}>
      {{
        listing: (
          <nav className="bd-links bio-resourcecards">
            {nodes &&
            nodes.map(node => {
              return (
                <SubsectionTopic
                  key={node.label}
                  title={node.title}
                  subtitle={node.subtitle}
                  href={`/topics/${node.label}/`}
                  accent={node.accent}
                  icon={node.icon}
                />
              );
            })}
          </nav>
        )
      }}
    </ReferenceLayout>
  );
};

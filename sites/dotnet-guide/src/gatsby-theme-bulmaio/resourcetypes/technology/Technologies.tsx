import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import SubsectionTechnology from 'gatsby-theme-bulmaio/src/components/subsections/SubsectionTechnology';

interface TechnologiesProps {
  allTechnologyYaml: {
    nodes: {
      label: string;
      title: string;
      subtitle?: string;
      logo?: {
        publicURL: string
      };
    }[]
  }
}

const DEFAULT_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_.NET_logo.png';

export const Technologies = () => {
  const
    { allTechnologyYaml: { nodes } }: TechnologiesProps = useStaticQuery(
      graphql`
  query {
    allTechnologyYaml(limit: 1000) {
      nodes {
        label
        title
        subtitle
        logo {
          publicURL
        }
      }
    }
  }
`
    );
  return (
    <ReferenceLayout pageTitle={'Technologies'} subtitle={'Resources organized by programming technologies'}>
      {{
        listing: (
          <nav className="bd-links bio-resourcecards">
            {nodes &&
            nodes.map(node => {
              let logo = DEFAULT_LOGO;
              if (node.logo) {
                logo = node.logo.publicURL;
              }
              return (
                <SubsectionTechnology
                  key={node.label}
                  title={node.title}
                  subtitle={node.subtitle}
                  href={`/technologies/${node.label}/`}
                  logo={logo}
                />
              );
            })}
          </nav>
        )
      }}
    </ReferenceLayout>
  );
};

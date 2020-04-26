import React, { FC } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { PageContext } from '../../components/models';
import SubsectionTechnology from '../../components/subsections/SubsectionTechnology';

interface TechnologiesProps {
  pageContext: PageContext
}

interface TechnologiesNodes {
  allTechnology2: {
    nodes: {
      label: string;
      slug: string;
      title: string;
      subtitle?: string;
      logo: { publicURL: string };
    }[]
  }
  pageContext: PageContext
}

const DEFAULT_LOGO = 'https://cdn.worldvectorlogo.com/logos/python-5.svg';

const AllTechnology2: FC<TechnologiesProps> = ({ pageContext }) => {
  const
    { allTechnology2: { nodes } }: TechnologiesNodes = useStaticQuery(
      graphql`
  query {
    allTechnology2(sort: {fields: [title]}, limit: 1000) {
      nodes {
        label
        slug
        title
        subtitle
        slug
        logo {
          publicURL
        }
      }
    }
  }
`
    );
  return (
    <ReferenceLayout pageTitle={'Technologies'}
                     subtitle={'Jump to all available learning resources on specific technologies, such as libraries, languages, and frameworks.'}>
      {{
        listing: (
          <>
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
                    href={node.slug}
                    logo={logo}
                  />
                );
              })}
            </nav>
            {Array.from({ length: pageContext.numPages }, (_, i) => (
              <Link
                key={`pagination-number${i + 1}`}
                to={`/technologies2/${i === 0 ? '' : i + 1}`}
                style={{ paddingRight: '1em' }}
              >
                {i + 1}
              </Link>
            ))}
          </>
        )
      }}
    </ReferenceLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default AllTechnology2;

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query {
    allTechnology2 {
      nodes {
        title
        slug
        body
      }
    }
  }
`;

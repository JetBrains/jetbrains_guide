import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';
import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { Technology2Reference } from './models';
import { PageContext } from '../../components/models';

export interface TechnologyIndexProps {
  data: {
    allTechnology2: {
      nodes: Technology2Reference[]
    }
  },
  pageContext: PageContext
}

const AllTechnology2: FunctionComponent<TechnologyIndexProps> = ({
                                                        data: { allTechnology2: allTechnology2 },
                                                        pageContext: { numPages }
                                                      }: TechnologyIndexProps
) => {
  const listing = (
    <>
      <ul>
        {allTechnology2.nodes.map(node => (
          <li key={node.slug}>
            <Link to={node.slug}>{node.title}</Link>
          </li>
        ))}
      </ul>
      {Array.from({ length: numPages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={`/authors/${i === 0 ? '' : i + 1}`}
          style={{ paddingRight: '1em' }}
        >
          {i + 1}
        </Link>
      ))}

    </>
  );
  return (
    <ReferenceLayout pageTitle="Technologies" subtitle="Jump to all available learning resources on specific technologies, such as libraries, languages, and frameworks.">
      {{ listing: listing }}
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

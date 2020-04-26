import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';

import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { PageContext } from '../../components/models';

export interface AuthorIndexProps {
  data: {
    allAuthor2: {
      nodes: { title: string; slug: string; body: string }[]
    }
  },
  pageContext: PageContext
}

const AllAuthor2: FunctionComponent<AuthorIndexProps> = (
  {
    data: { allAuthor2 },
    pageContext: { numPages }
  }: AuthorIndexProps) => {
  return (
    <ReferenceLayout pageTitle="Authors" subtitle="Resources organized by author.">
      {{
        listing: (
          <>
            <ul>
              {allAuthor2.nodes.map(node => (
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
        )
      }}
    </ReferenceLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default AllAuthor2;

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query {
    allAuthor2 {
      nodes {
        title
        slug
        body
      }
    }
  }
`;

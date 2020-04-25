import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';

import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { PageContext } from '../../components/models';

export interface AuthorIndexProps {
  data: {
    allAuthor: {
      nodes: { title: string; slug: string; body: string }[]
    }
  },
  pageContext: PageContext
}

const AllAuthor: FunctionComponent<AuthorIndexProps> = ({
                                                          data: { allAuthor },
                                                          pageContext: { numPages }
                                                        }: AuthorIndexProps) => {
  return (
    <ReferenceLayout pageTitle="Authors" subtitle="Contributors to the Guide">
      {{
        listing: (
          <>
            <ul>
              {allAuthor.nodes.map(node => (
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
export default AllAuthor;

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query {
    allAuthor {
      nodes {
        title
        slug
        body
      }
    }
  }
`;

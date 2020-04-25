import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import Header from './Header/Header';

const Layout: FunctionComponent = ({ children }) => {

  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;

// Define some fragments used everywhere
// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  fragment ResourceInfo on Resource {
    slug
    title
    body
    author {
      slug
      title
    }
    topics {
      slug
      title
    }
  }
  fragment ReferenceInfo on Reference {
    slug
    title
    body
    resources {
      slug
      title
    }
  }
`;

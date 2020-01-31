import React from 'react';
import SiteLayout from 'gatsby-theme-bulmaio/src/components/layout/SiteLayout';

const NotFoundPage = () => (
  <SiteLayout pageTitle={`Not Found`}>
    <>
      <h2>Nothing Here</h2>
      <p>Check that you followed the correct address.</p>
    </>
  </SiteLayout>
);

export default NotFoundPage;

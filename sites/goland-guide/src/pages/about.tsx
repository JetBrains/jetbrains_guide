import React from 'react';

import SiteLayout from 'gatsby-theme-bulmaio/src/components/layout/SiteLayout';

const AboutPage: React.FC = () => {

  return (
    <SiteLayout pageTitle={`About`}>
      <div>
        <h1>About</h1>
        <p>This is a sample site to drive the basic <code>MasterLayout</code>.</p>
      </div>
    </SiteLayout>
  );
};

export default AboutPage;

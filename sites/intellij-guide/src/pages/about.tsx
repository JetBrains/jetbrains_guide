import React from 'react';
// @ts-ignore
import splash from './intellij-idea-beam.svg';

import SiteLayout from 'gatsby-theme-bulmaio/src/components/layout/SiteLayout';

const dataUri = `url("${splash}") center center`;

const AboutPage: React.FC = () => {

  const pageTitle = 'About the IntelliJ IDEA Guide';

  return (
    <SiteLayout pageTitle={pageTitle}>
      <main className="bd-main bulmaio-body">
        <div className="bd-main-container container" style={{ marginBottom: '2rem' }}>
          <header className="bd-header" style={{ marginBottom: 0, minHeight: '6rem', background: dataUri, backgroundRepeat: 'no-repeat', backgroundSize: 1500 }}>
            <h1 className="title">{pageTitle}</h1>
          </header>

          <div className="columns">
            <div className="column is-three-quarters-desktop">
              <div className="bd-content content">
                <div className="content">
                  <h1>About the IntelliJ IDEA guide</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>


    </SiteLayout>
  );
};

export default AboutPage;

import React from 'react';
import HomepageLayout from 'gatsby-theme-bulmaio/src/components/layout/HomepageLayout';
// @ts-ignore
import splash from './splash.svg';
import { RecentItems } from 'gatsby-theme-bulmaio/src/components/recentitems/RecentItems';

const dataUri = `url("${splash}") center center`;

const IndexPage: React.FC = () => {

  return (
    <HomepageLayout title={`Home Page`}>
      {{
        hero: (
          <section className="hero is-medium"
                   style={{ background: dataUri, backgroundRepeat: 'no-repeat', backgroundSize: 1500 }}>
            <div className="hero-body">
              <div className="container">
                <h1 className="title">.NET Tools Guide</h1>
                <h2 className="subtitle">Learning resources for ReSharper Ultimate and Rider</h2>
              </div>
            </div>
          </section>
        ),
        main: (
          <RecentItems/>
        )
      }}
    </HomepageLayout>
  );
};

export default IndexPage;

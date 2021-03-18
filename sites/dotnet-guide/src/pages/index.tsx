import React from 'react';
import HomepageLayout from 'gatsby-theme-bulmaio/src/components/layout/HomepageLayout';
// @ts-ignore
import splash from './splash.png';
import { RecentItems } from 'gatsby-theme-bulmaio/src/components/recentitems/RecentItems';
import {TwitterCardPage} from "gatsby-theme-bulmaio/src/components/layout/MasterLayout";

const dataUri = `url("${splash}") center center`;

const PAGE_TITLE = '.NET Tools Guide';
const SUBTITLE = 'Learning resources for ReSharper, Rider, and more.';

const twitterCardPage: TwitterCardPage = {
  title: PAGE_TITLE,
  description: PAGE_TITLE + ' - ' + SUBTITLE,
  image: ''
};

const IndexPage: React.FC = () => {

  return (
    <HomepageLayout title={`Home Page`} twitterCardPage={twitterCardPage}>
      {{
        hero: (
          <section className="hero is-medium"
                   style={{ background: dataUri, backgroundRepeat: 'no-repeat', backgroundSize: 1500 }}>
            <div className="hero-body">
              <div className="container">
                <h1 className="title">{PAGE_TITLE}</h1>
                <h2 className="subtitle">{SUBTITLE}</h2>
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

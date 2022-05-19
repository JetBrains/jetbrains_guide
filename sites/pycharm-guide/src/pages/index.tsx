import React from 'react';
import HomepageLayout from 'gatsby-theme-bulmaio/src/components/layout/HomepageLayout';
// @ts-ignore
import splash from './pycharm_splash.svg';
import { RecentItems } from 'gatsby-theme-bulmaio/src/components/recentitems/RecentItems';
import {TwitterCardPage} from "gatsby-theme-bulmaio/src/components/layout/MasterLayout";

const dataUri = `url("${splash}") center center`;

const PAGE_TITLE = 'PyCharm Guide';
const SUBTITLE = 'Well-organized collection of learning resources for PyCharm';

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

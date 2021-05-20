import React from 'react';
import HomepageLayout from 'gatsby-theme-bulmaio/src/components/layout/HomepageLayout';
// @ts-ignore
import splash from './splash.svg';
import { RecentItems } from 'gatsby-theme-bulmaio/src/components/recentitems';
import {TwitterCardPage} from "gatsby-theme-bulmaio/src/components/layout/MasterLayout";

const dataUri = `url("${splash}") center center`;

const PAGE_TITLE = 'The Hitchhiker\'s Guide to GoLand';
const SUBTITLE = '';

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
            <>
              <section className={"section has-background-light"}>
                <div className="bd-main-container container">
                  <div className="columns">
                    <div className="column is-three-quarters-desktop">
                      <div className="bd-content content">
                        <h2>Learn something new, quickly</h2>

                        <p>JetBrains tools like <a href="https://jetbrains.com/go/">GoLand</a> are
                            powerful developer productivity tools. What is the best way to learn how
                            to harness that power?
                        </p>
                        <p>You can find useful information on our Twitter account, <a
                            href="https://twitter.com/GoLandIDE">@GoLandIDE</a>, or our <a
                            href="https://blog.jetbrains.com/go/">product blog</a>.

                            Plus, the <a href="https://www.jetbrains.com/go/learn/">documentation</a> is
                            always there to help. However, wouldn't it be better if you had everything you
                            needed to learn in one place?</p>

                        <p>We have created the GoLand Guide, a collection of bite-sized visual resources,
                            organized to help spark your learning. We hope it helps you get into the flow
                            and excel at what you do.</p>

                        <h2>Sharing Feedback and Contributing</h2>
                        <p>The GoLand Guide is also an open project, with <a
                            href="https://github.com/JetBrains/jetbrains_guide">a repository in GitHub</a> that
                            hosts all the content. We write all the content in Markdown and render a static site.
                            If you'd like to contribute to it, please refer to the <a
                            href="https://github.com/JetBrains/jetbrains_guide/blob/master/README.md">README</a>&nbsp;for more information.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <RecentItems/>
            </>
        )
      }}
    </HomepageLayout>
  );
};

export default IndexPage;

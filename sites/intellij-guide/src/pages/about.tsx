import React from 'react';
// @ts-ignore
import splash from './intellij-idea-beam.svg';

import SiteLayout from 'gatsby-theme-bulmaio/src/components/layout/SiteLayout';
import {TwitterCardPage} from "gatsby-theme-bulmaio/src/components/layout/MasterLayout";

const dataUri = `url("${splash}") center center`;

const PAGE_TITLE = 'About';
const SUBTITLE = 'About the IntelliJ IDEA Guide';

const twitterCardPage: TwitterCardPage = {
    title: PAGE_TITLE,
    description: SUBTITLE,
    image: ''
};

const AboutPage: React.FC = () => {

  return (
    <SiteLayout pageTitle={PAGE_TITLE} twitterCardPage={twitterCardPage}>
      <main className="bd-main bulmaio-body">
        <div className="bd-main-container container" style={{ marginBottom: '2rem' }}>
          <header className="bd-header" style={{ marginBottom: 0, minHeight: '6rem', background: dataUri, backgroundRepeat: 'no-repeat', backgroundSize: 1500 }}>
            <h1 className="title">{PAGE_TITLE}</h1>
          </header>

          <div className="columns">
            <div className="column is-three-quarters-desktop">
              <div className="bd-content content">
                  <div className="content">

                  <h2>The IntelliJ IDEA Guide</h2>
                </div>

            <p>JetBrains tools like IntelliJ IDEA are powerful developer productivity tools. What is the best way to learn how to harness that power?</p>

                <p>You can find useful information on our <a href= "https://twitter.com/intellijidea"> Twitter page</a>, or our <a href = "https://blog.jetbrains.com/idea/">product blog</a>. Plus, the <a href= "https://www.jetbrains.com/idea/">documentation</a> is always there to help.</p>

                <p>We have also created the IntelliJ IDEA Guide, a collection of bite-sized visual resources, organized to help spark your learning. We hope it helps you get into the flow and excel at what you do.</p>
              <h2>Sharing Feedback and Contributing</h2>
                  <p>The IntelliJ IDEA Guide is also an open project, with <a href="https://github.com/JetBrains/jetbrains_guide">a repository in GitHub</a> that
                      hosts all the content. We write all the content in Markdown and render a static site. If you'd like to contribute to it,
                      please refer to the <a href="https://github.com/JetBrains/jetbrains_guide/blob/master/README.md">README</a> for more information.
                  </p>
              </div>
            </div>
          </div>
          </div>
      </main>


    </SiteLayout>
  );
};

export default AboutPage;

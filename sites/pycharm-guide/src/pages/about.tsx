import React from 'react';
// @ts-ignore
import splash from './pycharm_splash.svg';

import SiteLayout from 'gatsby-theme-bulmaio/src/components/layout/SiteLayout';
import {TwitterCardPage} from "gatsby-theme-bulmaio/src/components/layout/MasterLayout";

const PAGE_TITLE = 'About';
const SUBTITLE = 'About the PyCharm Guide';

const twitterCardPage: TwitterCardPage = {
    title: PAGE_TITLE,
    description: SUBTITLE,
    image: ''
};

const dataUri = `url("${splash}") center center`;
const AboutPage: React.FC = () => {

    return (
        <SiteLayout pageTitle={PAGE_TITLE} twitterCardPage={twitterCardPage}>
            <main className="bd-main bulmaio-body">
                <div className="bd-main-container container">
                    <header className="bd-header"
                            style={{ background: dataUri, backgroundRepeat: 'no-repeat', backgroundSize: 1500 }}>
                        <article className="media">
                            <div className="media-content">
                                <div className="content">
                                    <div className="bd-header-titles">
                                        <h1 className="title">{PAGE_TITLE}</h1>
                                        <p className="subtitle is-4">{SUBTITLE}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </header>

                    <div className="columns">
                        <div className="column is-three-quarters-desktop">
                            <div className="bd-content content">
                                <h2>Learn something new, quickly</h2>
                                <p>JetBrains tools like <a href="https://jetbrains.com/pycharm/">PyCharm</a> are
                                    powerful developer productivity tools. What is the best way to learn how to harness that power?</p>
                                <p>You can find useful information on our Twitter account, <a href="https://twitter.com/PyCharm">@PyCharm</a>, or our <a
                                        href="https://blog.jetbrains.com/pycharm/">product blog</a>.

                                    Plus, the <a href="https://www.jetbrains.com/pycharm/learn/">documentation</a> is
                                    always there to help. However, wouldn't it be better if you had everything you needed to learn in one place?</p>
                                <p>We have created the PyCharm Guide, a collection of bite-sized visual resources, organized to help spark your
                                    learning. We hope it helps you get into the flow and excel at what you do.</p>
                                <h2>Sharing Feedback and Contributing</h2>
                                <p>The PyCharm Guide is also an open project, with <a href="https://github.com/JetBrains/jetbrains_guide">a repository in GitHub</a> that
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

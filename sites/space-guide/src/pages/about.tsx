import React from 'react';
// @ts-ignore
import splash from './splash.svg';

import SiteLayout from 'gatsby-theme-bulmaio/src/components/layout/SiteLayout';

const dataUri = `url("${splash}") center center`;
const AboutPage: React.FC = () => {

    const pageTitle = `About`
    const subtitle = `About the Space Guide`
    return (
        <SiteLayout pageTitle={pageTitle}>
            <main className="bd-main bulmaio-body">
                <div className="bd-main-container container">
                    <header className="bd-header"
                            style={{ background: dataUri, backgroundRepeat: 'no-repeat', backgroundSize: 1500 }}>
                        <article className="media">
                            <div className="media-content">
                                <div className="content">
                                    <div className="bd-header-titles">
                                        <h1 className="title">{pageTitle}</h1>
                                        {subtitle && <p className="subtitle is-4">{subtitle}</p>}
                                    </div>
                                </div>
                            </div>
                        </article>
                    </header>

                    <div className="columns">
                        <div className="column is-three-quarters-desktop">
                            <div className="bd-content content">
                                <h2>Learn something new, quickly</h2>
                                <p>JetBrains Space is a powerful platform. What is the best way to learn how to harness that power?</p>
                                <p>You can find useful information on <a href="https://twitter.com/JetBrains_Space">Twitter</a> or our <a
                                    href="https://blog.jetbrains.com/space/">product blog</a>.

                                    Plus, the <a href="https://www.jetbrains.com/help/space/getting-started.html">documentation</a> is
                                    always there to help. However, wouldn't it be better if you had everything you needed to learn in one place?</p>
                                <p>We have created the Space Guide, a collection of bite-sized visual resources, organized to help spark your
                                    learning. We hope it helps you get into the flow and excel at what you do.</p>
                                <h2>Sharing Feedback and Contributing</h2>
                                <p>The Space Guide is also an open project, with <a href="https://github.com/JetBrains/jetbrains_guide">a repository in GitHub</a> that
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
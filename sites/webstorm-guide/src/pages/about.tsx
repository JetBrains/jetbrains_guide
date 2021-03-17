import React from 'react';
// @ts-ignore
import splash from './webstorm-beam.svg';

import SiteLayout from 'gatsby-theme-bulmaio/src/components/layout/SiteLayout';
import {TwitterCardPage} from "gatsby-theme-bulmaio/src/components/layout/MasterLayout";

const dataUri = `url("${splash}") center center`;

const PAGE_TITLE = 'About This Guide';
const SUBTITLE = 'About the WebStorm Guide';

const twitterCardPage: TwitterCardPage = {
    title: PAGE_TITLE,
    description: SUBTITLE,
    image: ''
};

const AboutPage: React.FC = () => {

    return (
        <SiteLayout pageTitle={PAGE_TITLE} twitterCardPage={twitterCardPage}>
            <main className="bd-main bulmaio-body">
                <div className="bd-main-container container" style={{marginBottom: '2rem'}}>
                    <header className="bd-header"
                            style={{background: dataUri, backgroundRepeat: 'no-repeat', backgroundSize: 1500}}>
                        <article className="media">
                            <div className="media-content">
                                <div className="content">
                                    <div className="bd-header-titles">
                                        <h1 className="title">{PAGE_TITLE}</h1>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </header>

                    <div className="columns">
                        <div className="column is-three-quarters-desktop">
                            <div className="bd-content content">
                                <div className="content">
                                    <p>
                                        Have you ever found a tip about how to do a specific thing in a JetBrains IDE
                                        faster and caught yourself thinking, “Wow, I didn’t know about that, I wonder
                                        what other productivity boosters I’ve missed?”
                                    </p>
                                    <p>
                                        You can find some information about such productivity boosters on <a
                                        href="https://twitter.com/WebStormIDE">Twitter</a> or our <a
                                        href="https://blog.jetbrains.com/webstorm/">product blog</a>. Plus, the <a
                                        href="https://www.jetbrains.com/help/webstorm/meet-webstorm.html">documentation</a> is
                                        always there to help. For those who
                                        don’t have much time to learn but still want to get better at what they do,
                                        we’ve created the WebStorm Guide. The Guide comprises a collection of bite-sized
                                        visual resources, organized to help spark your learning.
                                    </p>
                                    <p>
                                        Despite the name of the Guide, <strong>the information in it is also applicable
                                        to other JetBrains IDEs</strong> that have JavaScript support, including PyCharm
                                        Professional, GoLand, and IntelliJ IDEA Ultimate.

                                    </p>


                                    <h2>Sharing Feedback and Contributing</h2>
                                    <p>If you have any ideas about how to make this Guide better or want to share your
                                        feedback with us, feel free to fill out <a
                                            href="https://forms.gle/eenYd4sngtV4rQ3f7">this short survey</a>. If you
                                        want to report an issue, you can do it <a
                                            href="https://github.com/JetBrains/jetbrains_guide/issues">here</a
                                        >.

                                    </p>
                                    <p>The WebStorm Guide is also an open project, with <a
                                        href="https://github.com/JetBrains/jetbrains_guide">a
                                        repository in GitHub</a> that hosts all the content. We write
                                        all the content in Markdown and use Gatsby to render a static site.
                                        <strong style={{paddingLeft: "0.2rem", paddingRight: "0.2rem"}}>We encourage you to contribute to the Guide if you have any
                                            ideas!</strong>
                                        Please refer to the <a
                                            href="https://github.com/JetBrains/jetbrains_guide/blob/master/README.md">README</a> for
                                        more information.

                                    </p>
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

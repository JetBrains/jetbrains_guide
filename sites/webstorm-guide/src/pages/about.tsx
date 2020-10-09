import React from 'react';
// @ts-ignore
import splash from './webstorm-beam.svg';

import SiteLayout from 'gatsby-theme-bulmaio/src/components/layout/SiteLayout';

const dataUri = `url("${splash}") center center`;

const AboutPage: React.FC = () => {

  const pageTitle = 'About the WebStorm Guide';

  return (
    <SiteLayout pageTitle={pageTitle}>
      <main className="bd-main bulmaio-body">
        <div className="bd-main-container container" style={{ marginBottom: '2rem' }}>
          <header className="bd-header" style={{ marginBottom: 0, minHeight: '6rem', background: dataUri, backgroundRepeat: 'no-repeat', backgroundSize: 1500 }}>

          </header>

          <div className="columns">
            <div className="column is-three-quarters-desktop">
              <div className="bd-content content">
                <div className="content">
                  <h2>Using the Guide</h2>
                  <p>The WebStorm Guide comprises pieces of information organized into two categories: Topics and
                    Technologies.
                    Let’s take a look at each.</p>
                  <h4>Category 1: Technologies</h4>
                  <p>Let’s imagine that you’ve found a tip about WebStorm’s powerful React support and caught yourself
                    thinking,
                    “I didn’t know that, I wonder what other React productivity boosters I’ve missed?” If that sounds
                    familiar,
                    the Technologies section of the guide is what you are looking for. All the resources in it are
                    organized
                    into
                    groups of specific technologies, such as popular frameworks, libraries, and the like.</p>
                  <h4>Category 2: Topics</h4>
                  <p>Sometimes you come across a useful tip on how to do a specific job in the IDE, such as how to add a
                    conditional breakpoint when debugging, and you want to dive deeper into that topic. To help you do
                    that,
                    we’ve
                    also grouped the resources by topic. Each topic has a brief explanation and a list of resources for
                    that
                    topic.</p>
                  <h2>Sharing Feedback and Contributing</h2>
                  <p>If you have any ideas about how to make this Guide better or want to share your feedback with us,
                    feel free
                    to fill out <a href="https://forms.gle/eenYd4sngtV4rQ3f7">this short survey</a>.</p>
                  <p>The WebStorm Guide is also an open project, with <a
                    href="https://github.com/JetBrains/jetbrains_guide">a
                    repository in GitHub</a> that hosts all the content. We write
                    all the content in Markdown and use GatsbyJS to render a static site. If you’d like to contribute to
                    it,
                    please refer to the <a
                      href="https://github.com/JetBrains/jetbrains_guide/blob/master/README.md">README</a> for more
                    information.
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

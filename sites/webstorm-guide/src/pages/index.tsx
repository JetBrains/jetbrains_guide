import React from 'react';
import HomepageLayout from 'gatsby-theme-bulmaio/src/components/layout/HomepageLayout';
// @ts-ignore
import splash from './splash.svg';

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
                <h1 className="title">WebStorm Guide</h1>
                <div className="columns">
                  <div className="column is-two-thirds">

                    <p className="is-size-4">Find out how to be more productive and write high-quality code faster with
                      a series of tips and tricks, carefully selected for you in one place by the WebStorm team.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ),
        main: (
          <section className="section has-background-light">
            <div className="container">
              <h1 className="title">Learn something new quickly</h1>
              <div className="columns">
                <div className="column is-four-fifths-desktop">
                  To start learning, simply jump to the section you find most relevant available within two broader categories:
                  <ul>
                    <li><strong>Technologies</strong>: learning resources organized by languages, libraries, and frameworks.</li>
                    <li><strong>Topics</strong>: tips and tricks organized by a specific topic, e.g. debugging or code editing.</li>
                  </ul>
                  <p>If you’ve got an idea how to make this guide better or want to share your feedback with us, go to
                    the About page to find out how you can do that.</p>

                </div>
              </div>
            </div>
          </section>
        )
      }}
    </HomepageLayout>
  );
};

export default IndexPage;

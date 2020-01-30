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
              <h1 className="title">Recent Items</h1>
              <div className="columns">
                <div className="column is-four-fifths-desktop">
                  xxx
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

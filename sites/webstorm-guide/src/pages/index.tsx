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

                    <p className="is-size-4">Find out how you can be more productive and write high-quality code faster
                      with a series of tips and tricks, which we have carefully put together for you.</p>
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
              <div>
                <div>
                  To start learning, simply jump to the section you find most interesting from two broad categories:
                </div>

                <div className="container" style={{ marginTop: '2rem' }}>
                  <div className="columns">
                    <div className="column">
                      <h1 className="is-size-4">Technologies</h1>
                      <p>Go through handy tips and tricks grouped by language, library, and framework.</p>
                    </div>
                    <div className="column">
                      <h1 className="is-size-4">Topics</h1>
                      <p>Explore a collection of tips organized by topic, such as debugging or code editing.</p>
                    </div>
                  </div>
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

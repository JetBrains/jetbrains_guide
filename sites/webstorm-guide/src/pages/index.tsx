import React from 'react';
import HomepageLayout from 'gatsby-theme-bulmaio/src/components/layout/HomepageLayout';
// @ts-ignore
import splash from './webstorm-beam.svg';
import { Link } from 'gatsby';

const dataUri = `url("${splash}") center center`;

const IndexPage: React.FC = () => {

  return (
    <HomepageLayout title={`Home Page`}>
      {{
        hero: (
          <section className="hero is-medium"
                   style={{ background: dataUri, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
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
              <h1 className="title">Learn Something New Quickly</h1>
              <div>
                <div className="is-size-5">
                  To start learning, simply jump to the section you find most interesting from two broad categories:
                </div>

                <div className="container" style={{ marginTop: '2rem' }}>
                  <div className="columns">
                    <div className="column">
                      <div className="card">
                        <div className="card-content">
                          <div className="media">
                            <div className="media-content">
                              <Link to={`/technologies`}><h1 className="is-size-4">Technologies</h1></Link>
                            </div>
                          </div>
                          <div className="content">
                            <p className="is-size-5">Go through handy tips and tricks grouped by language, library, and
                              framework.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="card">
                        <div className="card-content">
                          <div className="media">
                            <div className="media-content">
                              <Link to={`/topics`}><h1 className="is-size-4">Topics</h1></Link>
                            </div>
                          </div>
                          <div className="content">
                            <p className="is-size-5">Explore a collection of tips organized by topic, such as debugging
                              or
                              code editing.</p>
                          </div>
                        </div>
                      </div>
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

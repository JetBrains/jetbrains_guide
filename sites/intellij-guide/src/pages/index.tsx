import React from 'react';
import HomepageLayout from 'gatsby-theme-bulmaio/src/components/layout/HomepageLayout';
// @ts-ignore
import splash from './intellij-idea-beam.svg';
import { Link } from 'gatsby';
import {TwitterCardPage} from "gatsby-theme-bulmaio/src/components/layout/MasterLayout";

const dataUri = `url("${splash}") center center`;

const PAGE_TITLE = 'IntelliJ IDEA Guide';
const SUBTITLE = 'Learning resources for IntelliJ IDEA and related technologies.';

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
                       style={{ background: dataUri, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', color:"white"}}>
                <div className="hero-body">
                  <div className="container">
                    <h1 className="title" style={{color:"white"}}>{PAGE_TITLE}</h1>
                    <div className="columns">
                      <div className="column is-two-thirds" >

                        <p className="is-size-4">Find out how you can be more productive with a series of tips and tricks.</p>
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
                      To start learning, jump to the section you find most interesting from two broad categories:
                    </div>

                    <div className="container" style={{ marginTop: '2rem' }}>
                      <div className="columns">
                        <div className="column">
                          <Link to={`/tips`}>
                            <div className="card">
                              <div className="card-content">
                                <div className="media">
                                  <div className="media-content">
                                    <h1 className="is-size-4">Tips</h1>
                                  </div>
                                </div>
                                <div className="content">
                                  <p className="is-size-5">Go through handy tips and tricks grouped by topics and
                                    technologies.</p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="column">
                          <Link to={`/tutorials`}>
                            <div className="card">
                              <div className="card-content">
                                <div className="media">
                                  <div className="media-content">
                                    <h1 className="is-size-4">Tutorials</h1>
                                  </div>
                                </div>
                                <div className="content">
                                  <p className="is-size-5">Explore our step-by-step tutorials grouped by topics and technologies.</p>
                                </div>
                              </div>
                            </div>
                          </Link>
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

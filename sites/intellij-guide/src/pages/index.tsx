import React from 'react';
import HomepageLayout from 'gatsby-theme-bulmaio/src/components/layout/HomepageLayout';
// @ts-ignore
import splash from './intellij-idea-beam.svg';
import { Link } from 'gatsby';
import {TwitterCardPage} from "gatsby-theme-bulmaio/src/components/layout/MasterLayout";

const dataUri = `url("${splash}") center center`;

const PAGE_TITLE = 'IntelliJ IDEA Guide';
const SUBTITLE = 'IntelliJ IDEA 及相关技术的学习材料';

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

                        <p className="is-size-4">通过这些 IDE 操作技巧能让您的开发工作更高效！</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
          ),
          main: (
              <section className="section has-background-light">
                <div className="container">
                  <h1 className="title">
                    来学点新东西吧！
                  </h1>
                  <div>
                    <div className="is-size-5">
                      请从以下两种分类中挑一个您最感兴趣的方式开始学习：
                    </div>

                    <div className="container" style={{ marginTop: '2rem' }}>
                      <div className="columns">
                        <div className="column">
                          <Link to={`/tips`}>
                            <div className="card">
                              <div className="card-content">
                                <div className="media">
                                  <div className="media-content">
                                    <h1 className="is-size-4">操作小技巧</h1>
                                  </div>
                                </div>
                                <div className="content">
                                  <p className="is-size-5">
                                    通过短视频快速掌握 IDE 生产力技巧。
                                  </p>
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
                                    <h1 className="is-size-4">主题教程</h1>
                                  </div>
                                </div>
                                <div className="content">
                                  <p className="is-size-5">
                                    通过手把手的主题教学来学习新技术。
                                  </p>
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

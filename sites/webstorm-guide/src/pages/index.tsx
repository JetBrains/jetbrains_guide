import React from 'react';
import HomepageLayout from 'gatsby-theme-bulmaio/src/components/layout/HomepageLayout';
// @ts-ignore
import splash from './webstorm-beam.svg';
import {Link} from 'gatsby';
import {TwitterCardPage} from "gatsby-theme-bulmaio/src/components/layout/MasterLayout";

const dataUri = `url("${splash}") center center`;

const PAGE_TITLE = 'JavaScript and Beyond: Tips and Tricks for JetBrains IDEs';
const SUBTITLE = 'Learning resources';

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
                             style={{background: dataUri, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                        <div className="hero-body">
                            <div className="container">
                                <h1 className="title">{PAGE_TITLE}</h1>
                                <div className="columns">
                                    <div className="column is-two-thirds">

                                        <p className="is-size-4">Using WebStorm or any other JetBrains IDE with
                                            <a style={{paddingLeft: "0.3em"}} href="https://www.jetbrains.com/products.html#lang=js">JavaScript support</a>? Explore a collection
                                            of learning
                                            resources to increase your productivity and start making amazing JavaScript
                                            apps
                                            faster.</p>
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
                                    To start learning, simply jump to the section you find most interesting from three
                                    categories:
                                </div>

                                <div className="container" style={{marginTop: '2rem'}}>
                                    <div className="columns">
                                        <div className="column">
                                            <div className="card">
                                                <div className="card-content">
                                                    <div className="media">
                                                        <div className="media-content">
                                                            <Link to={`/technologies`}><h1
                                                                className="is-size-4">Technologies</h1></Link>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <p className="is-size-5">Jump to all tips and tricks grouped by
                                                            language, library, and
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
                                                            <Link to={`/topics`}><h1 className="is-size-4">Topics</h1>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <p className="is-size-5">Explore a collection of tips organized
                                                            by topic, such as debugging
                                                            or
                                                            code editing.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="card">
                                                <div className="card-content">
                                                    <div className="media">
                                                        <div className="media-content">
                                                            <Link to={`/tutorials`}><h1
                                                                className="is-size-4">Tutorials</h1></Link>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <p className="is-size-5">Go through detailed lessons to learn
                                                            how to work with specific technologies.</p>
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

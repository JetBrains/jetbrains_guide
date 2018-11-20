import * as React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

import './index.scss';
// @ts-ignore
import favicon from './jetbrains_favicon.ico';

import Navbar from '../components/navbar/Navbar';
import { NAVBAR } from '../components/navbar/constants';
import Footer from '../components/Footer';

import HeadScript from './GtmHead';
import BodyScript from './GtmBody';

interface ImageLayoutProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  subtitle?: string;
  headshot: any;
}

class ImageLayout extends React.PureComponent<ImageLayoutProps, {}> {
  public render() {
    const { title, subtitle, headshot } = this.props;

    return (
      <div>
        <Helmet
          title={`${title} - PyCharm Guide`}
          meta={[{ name: 'description', content: 'template' }, { name: 'keywords', content: 'template, something' }]}
        >
          <HeadScript />
          <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js" />
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <html lang="en" />
          <body className="layout-default" />
          <link rel="shortcut icon" href={favicon} />
        </Helmet>
        <Navbar {...NAVBAR} />

        <main className="bd-main bulmaio-body">
          <div className="bd-main-container container">
            <header className="bd-header">
              <article className="media">
                <figure className="media-left">
                  <div className="image is-rounded is-96x96">
                    <Img className="bio-resourcecard-logo" fluid={headshot.childImageSharp.fluid} />
                  </div>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <div className="bd-header-titles">
                      <h1 className="title">{title}</h1>
                      {subtitle && <p className="subtitle is-4">{subtitle}</p>}
                    </div>
                  </div>
                </div>
              </article>
            </header>

            {this.props.children}
          </div>
        </main>
        <Footer />
        <BodyScript />
      </div>
    );
  }
}

export default ImageLayout;

import * as React from 'react';
import Helmet from 'react-helmet';

import './index.scss';
// @ts-ignore
import favicon from './jetbrains_favicon.ico';

import Navbar from '../components/navbar/Navbar';
import { NAVBAR } from '../components/navbar/constants';
import Footer from '../components/Footer';
import Heading from '../components/Heading';

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  subtitle?: string;
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, {}> {
  public render() {
    return (
      <div>
        <Helmet
          title={`${this.props.title} - PyCharm Guide`}
          meta={[{ name: 'description', content: 'template' }, { name: 'keywords', content: 'template, something' }]}
        >
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
            <div className="bd-lead">
              <Heading title={this.props.title} subtitle={this.props.subtitle} />
              {this.props.children}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default DefaultLayout;

import * as React from 'react';
import Helmet from 'react-helmet';

import './index.scss';
// @ts-ignore
import favicon from './jetbrains_favicon.ico';

import Navbar from '../components/navbar/Navbar';
import { NAVBAR } from '../components/navbar/constants';
import Footer from '../components/Footer';

import BodyScript from './GtmBody';
import HeadScript from './GtmHead';

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location?: {
    pathname: string;
  };
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, {}> {
  public render() {
    return (
      <div>
        <Helmet
          title="PyCharm Guide"
          meta={[{ name: 'description', content: 'template' }, { name: 'keywords', content: 'template, something' }]}
        >
          <HeadScript />
          <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <html lang="en" />
          <body className="layout-default" />
          <link rel="shortcut icon" href={favicon} />
        </Helmet>
        <Navbar {...NAVBAR} />

        <div className="content">{this.props.children}</div>
        <Footer />
        <BodyScript />
      </div>
    );
  }
}

export default DefaultLayout;

import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';

import './index.scss';
// @ts-ignore
import favicon from './jetbrains_favicon.ico';

import Navbar from '../components/navbar/Navbar';
import { NAVBAR } from '../components/navbar/constants';
import Footer from '../components/Footer';
import Heading from '../components/Heading';

import BodyScript from './GtmBody';
import HeadScript from './GtmHead';

export interface ISidebarLayoutProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  subtitle?: string;
  sidebar?: ReactNode;
  children: ReactNode;
}

const SidebarLayout: React.SFC<ISidebarLayoutProps> = ({ title, subtitle, children, sidebar }) => (
  <div>
    <Helmet
      title={`${title} - PyCharm Guide`}
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

    <main className="bd-main bulmaio-body">
      <div className="bd-side-background" />
      <div className="bd-main-container container">
        <div className="bd-duo">
          <div className="bd-lead">
            <Heading title={title} subtitle={subtitle} />
            {children}
          </div>

          {sidebar}
        </div>
      </div>
    </main>
    <Footer />
    <BodyScript />
  </div>
);

export default SidebarLayout;

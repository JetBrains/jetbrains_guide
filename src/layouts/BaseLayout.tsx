import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';

import { NAVBAR } from '../components/navbar/constants';
import Navbar from '../components/navbar/Navbar';

import './index.scss';
// @ts-ignore
import favicon from './jetbrains_favicon.ico';

export interface ITwitterCard {
  title: string;
  description: string;
  imageUrl: string;
}

interface IBaseLayoutProps {
  title: string;
  twitterCard?: ITwitterCard;
  children: React.ReactNode;
}

const BaseLayout: React.FunctionComponent<IBaseLayoutProps> = ({ title, twitterCard, children }) => {
  return (
    <div>
      <Helmet title={`${title} - PyCharm Guide`}>
        <script defer={true} src="https://use.fontawesome.com/releases/v5.3.1/js/all.js" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PyCharm" />
        <meta name="twitter:creator" content="@PyCharm" />
        {twitterCard && <meta name="twitter:title" content={twitterCard.title} />}
        {twitterCard && <meta name="twitter:description" content={twitterCard.description} />}
        {twitterCard && <meta name="twitter:image" content={twitterCard.imageUrl} />}

        <html lang="en" />
        <body className="layout-default" />
        <link rel="shortcut icon" href={favicon} />
      </Helmet>
      <Navbar {...NAVBAR} />

      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;

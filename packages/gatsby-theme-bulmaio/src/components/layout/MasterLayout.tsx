import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../navbar';
import Footer from '../footer';
// @ts-ignore
import makeTwitterMeta, { MetaValue, TwitterCardConfig } from '../../common/TwitterCard';
// @ts-ignore
import './index.scss';
import { FooterProps } from '../footer/Footer';
import { NavbarProps } from '../navbar/Navbar';
import Favicon from '../favicon/Favicon';

export interface HelmetProps {
  // Site-wide Config-driven props shoved into <head>
  siteTitle: string;
}

export interface PageProps {
  // Data specific to this page, e.g. pageTitle
  pageTitle: string;
  twitterCardConfig?: TwitterCardConfig;
  children: React.ReactNode;
}

export interface MasterLayoutProps {
  helmet: HelmetProps;
  navbar: NavbarProps;
  page: PageProps;
  footer: FooterProps;
}

// @ts-ignore

const MasterLayout: React.FC<MasterLayoutProps> = (
  { helmet, navbar, page, footer }) => {
  let metaValues: MetaValue[] = [
    { name: `viewport`, content: `width=device-width, initial-scale=1` }
  ];

  if (page.twitterCardConfig) {
    const twitterValues: MetaValue[] = makeTwitterMeta(page.twitterCardConfig);
    metaValues = [...metaValues, ...twitterValues];
  }

  return (
    <div>
      <Helmet
        title={`${page.pageTitle} - ${helmet.siteTitle}`}
        meta={metaValues}>
        <html lang="en"/>
        <meta charSet={`utf-8`}/>
        <meta httpEquiv={`X-UA-Compatible`}/>
        <body className='layout-default'/>
        {Favicon}
        <script defer={true} src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"/>
      </Helmet>
      <Navbar {...navbar}/>
      {page.children}
      <Footer {...footer}/>
    </div>
  );
};

export default MasterLayout;

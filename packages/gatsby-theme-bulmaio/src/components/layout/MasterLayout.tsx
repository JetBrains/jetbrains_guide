import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Navbar from '../navbar';
import Footer from '../footer';
// @ts-ignore
import './guide.css';
import { FooterProps } from '../footer/Footer';
import { NavbarProps } from '../navbar/Navbar';
import Favicon from '../favicon/Favicon';

export interface TwitterCardSite {
  siteName: string;
  creator: string;
}

export interface TwitterCardPage {
  title: string;
  description: string;
  image: string;
}

export interface TwitterCardProps {
  site: TwitterCardSite;
  page: TwitterCardPage;
}

export interface HelmetProps {
  // Site-wide Config-driven props shoved into <head>
  siteTitle: string;
  twitterCard?: TwitterCardProps;
}

export interface PageProps {
  // Data specific to this page, e.g. pageTitle
  pageTitle: string;
  children: React.ReactNode;
}

export interface MasterLayoutProps {
  helmet: HelmetProps;
  navbar: NavbarProps;
  page: PageProps;
  footer: FooterProps;
}

const MasterLayout: React.FC<MasterLayoutProps> = (
  { helmet, navbar, page, footer }) => {

  // Twitter stuff
  const { twitterCard } = helmet;

  return (
    <div>
      <Helmet
        title={`${page.pageTitle} - ${helmet.siteTitle}`}>
        <html lang="en" />
        <meta charSet={`utf-8`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv={`X-UA-Compatible`} />
        {twitterCard && <meta name="description" content={twitterCard.page.description}/>}
        {twitterCard && <meta name={`twitter:card`} content={`summary_large_image`} />}
        {twitterCard && <meta name={`twitter:site`} content={twitterCard.site.siteName} />}
        {twitterCard && <meta name={`twitter:creator`} content={twitterCard.site.creator} />}
        {twitterCard && <meta name={`twitter:title`} content={twitterCard.page.title} />}
        {twitterCard && <meta name={`twitter:description`} content={twitterCard.page.description} />}
        {twitterCard && <meta name={`twitter:image`} content={twitterCard.page.image} />}
        <body className='layout-default' />
        {Favicon}
        <script defer={true} src="https://use.fontawesome.com/releases/v6.0.0-beta3/js/all.js" />
      </Helmet>
      <Navbar {...navbar} />
      {page.children}
      <Footer {...footer} />
    </div>
  );
};

export default MasterLayout;

// Define some fragments used everywhere
// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  fragment ResourceInfo on Resource {
    slug
    title
    body
    author {
      slug
      title
    }
    topics {
      slug
      title
    }
    technologies {
      slug
      title
    }
  }
  fragment ReferenceInfo on Reference {
    slug
    title
    body
    resources {
      slug
      title
    }
  }
`;

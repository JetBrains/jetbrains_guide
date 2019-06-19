/*

Mediate between the theme's layout and the local site's info.

 */

import React from 'react';
import MasterLayout, {
  HelmetProps,
  MasterLayoutProps,
  PageProps
} from './MasterLayout';
import SiteConfig from '../../common/SiteConfig';
import { graphql, useStaticQuery } from 'gatsby';
import { NavbarProps } from '../navbar/Navbar';
import { FooterProps } from '../footer/Footer';

const SiteLayout: React.FC<PageProps> = ({ children, pageTitle, twitterCardConfig }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            theme {
              helmet {
                siteTitle
              }
              navbar {
                brand {
                  githubUrl
                  twitterUrl
                }
                start {
                  items {
                    accent
                    cssClass
                    href
                    label
                    icon
                    items {
                      accent
                      description
                      href
                      icon
                      label
                    }
                  }                  
                }
                end {
                  links {
                    color
                    href
                    icon
                  }
                  buttons {
                    accent
                    href
                    label
                  }
                }
              }
              footer {
                copyright
              }
            }  
          }
        }
      }
    `
  ) as SiteConfig;
  const { helmet, navbar, footer } = site.siteMetadata.theme;

  // Make the various pieces of configuration
  // Helmet
  const helmetProps: HelmetProps = {
    siteTitle: helmet.siteTitle
  };

  // Navbar
  const navbarProps: NavbarProps = {
    brand: {
      githubUrl: navbar.brand.githubUrl,
      twitterUrl: navbar.brand.twitterUrl
    },
    start: navbar.start,
    end: navbar.end
  };

  // Footer
  const footerProps: FooterProps = {
    copyright: footer.copyright
  };

  // Now the page information
  const pageProps: PageProps = {
    pageTitle,
    twitterCardConfig,
    children
  };
  const LayoutProps: MasterLayoutProps = {
    helmet: helmetProps,
    navbar: navbarProps,
    page: pageProps,
    footer: footerProps
  };

  return (
    <MasterLayout {...LayoutProps}>
      {children}
    </MasterLayout>
  );
};

export default SiteLayout;

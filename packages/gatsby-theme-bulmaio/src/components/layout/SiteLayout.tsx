/*

Mediate between the theme's layout and the local site's info.

 */

import * as React from 'react';
import MasterLayout, {
  HelmetProps,
  MasterLayoutProps,
  PageProps,
  TwitterCardPage,
} from './MasterLayout';
import SiteConfig from '../../common/SiteConfig';
import { graphql, useStaticQuery } from 'gatsby';
import { NavbarProps } from '../navbar/Navbar';
import { FooterProps } from '../footer/Footer';

export interface SiteLayoutProps extends PageProps {
  twitterCardPage?: TwitterCardPage;
}

const SiteLayout: React.FC<SiteLayoutProps> = ({
  children,
  pageTitle,
  twitterCardPage,
}) => {
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
                  twitterAccount
                  twitterCardFallbackImage
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
    siteTitle: helmet.siteTitle,
  };
  // If this page wants a Twitter card, add the site-wide and page-specific
  // Twitter Card meta info
  if (twitterCardPage) {
    const twitterCardImage = twitterCardPage.image
      ? twitterCardPage.image
      : navbar.brand.twitterCardFallbackImage;

    helmetProps.twitterCard = {
      site: {
        creator: navbar.brand.twitterAccount,
        siteName: navbar.brand.twitterAccount,
      },
      page: {
        title: pageTitle,
        description: twitterCardPage.description,
        image: twitterCardImage,
      },
    };
  }

  // Navbar
  const navbarProps: NavbarProps = {
    brand: {
      githubUrl: navbar.brand.githubUrl,
      twitterUrl: navbar.brand.twitterUrl,
    },
    start: navbar.start,
    end: navbar.end,
  };

  // Footer
  const footerProps: FooterProps = {
    copyright: footer.copyright,
  };

  // Now the page information
  const pageProps: PageProps = {
    pageTitle,
    children,
  };
  const LayoutProps: MasterLayoutProps = {
    helmet: helmetProps,
    navbar: navbarProps,
    page: pageProps,
    footer: footerProps,
  };

  return <MasterLayout {...LayoutProps}>{children}</MasterLayout>;
};

export default SiteLayout;

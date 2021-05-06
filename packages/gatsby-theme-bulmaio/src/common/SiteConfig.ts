/*

What's expected in gatsby-config.js siteMetadata and a helper
to get it.

 */

import { NavbarEndProps } from '../components/navbar/NavbarEnd';
import { NavbarStartProps } from '../components/navbar/NavbarStart';

export default interface SiteConfig {
  site: {
    siteMetadata: {
      theme: {
        helmet: { siteTitle: string };
        navbar: {
          brand: {
            githubUrl: string;
            twitterUrl: string;
            twitterAccount: string;
            twitterCardFallbackImage: string;
          },
          start: NavbarStartProps,
          end: NavbarEndProps
        }
        footer: {
          copyright: string
        }
      }
    }
  }
}

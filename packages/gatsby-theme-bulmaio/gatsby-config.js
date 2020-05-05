module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-yaml`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-5P98',
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
        query: `
                    {
                      site {
                        pathPrefix
                      }
            
                      allSitePage {
                        nodes {
                          path
                        }
                      }
                  }`,
        resolveSiteUrl: ({ site, allSitePage }) => {
          return 'https://www.jetbrains.com'
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `https://www.jetbrains.com${node.path}`,
              changefreq: `daily`,
              priority: 0.8,
            }
          })
      }
    }
  ]
}


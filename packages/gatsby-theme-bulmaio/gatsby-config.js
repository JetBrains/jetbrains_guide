module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-yaml`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
        remarkPlugins: [
          require('remark-external-links')
        ]
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
      resolve: 'gatsby-plugin-lunr',
      options: {
        languages: [
          {
            name: 'en'
          }
        ],
        fields: [
          { name: 'title', store: true, attributes: { boost: 20 } },
          { name: 'subtitle', store: true, attributes: { boost: 10 } },
          { name: 'slug', store: true },
          { name: 'type', store: false },
          { name: 'excerpt', store: false }
        ],
        resolvers: {
          Tip: {
            title: node => node.title,
            subtitle: node => node.subtitle,
            slug: node => node.slug,
            excerpt: node => node.excerpt ? node.excerpt : node.leadin,
            type: () => 'tip',
          },
          Tutorial: {
            title: node => node.title,
            subtitle: node => node.subtitle,
            slug: node => node.slug,
            excerpt: node => node.excerpt ? node.excerpt : node.leadin,
            type: () => 'tutorial',
          },
          TutorialStep: {
            title: node => node.title,
            subtitle: node => node.subtitle,
            slug: node => node.slug,
            excerpt: node => node.excerpt ? node.excerpt : node.leadin,
            type: () => 'tutorialstep',
          }
        }
      }
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
          return 'https://www.jetbrains.com';
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `https://www.jetbrains.com${node.path}`,
              changefreq: `daily`,
              priority: 0.8,
            };
          })
      }
    }
  ]
};


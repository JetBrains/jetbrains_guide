module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            title: "JetBrains Guide",
            serialize: ({query: {site, allResource}}) => {
              return allResource.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  title: edge.node.title,
                  description: edge.node.excerpt,
                  date: edge.node.date,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                })
              })
            },
            query: `
              {
                allResource(
                  limit: 1000,
                  sort: { order: DESC, fields: [date] },
                ) {
                  edges {
                    node {
                      title
                      excerpt
                      date
                      slug
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
          },
        ],
      },
    },
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
        defaultDataLayer: {platform: 'gatsby'},
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
          {name: 'title', store: true, attributes: {boost: 20}},
          {name: 'subtitle', store: true, attributes: {boost: 10}},
          {name: 'slug', store: true},
          {name: 'type', store: false},
          {name: 'excerpt', store: false}
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
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => 'https://www.jetbrains.com',
        resolvePagePath: (page) => page.path,
      }
    }
  ]
}


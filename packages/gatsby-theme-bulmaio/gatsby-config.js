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
            name: 'en',
            // Let's skip these
            // filterNodes: node => node.frontmatter,
            // customEntries: [ ]
          }
        ],
        fields: [
          { name: 'title', store: true, attributes: { boost: 20 } },
          { name: 'subtitle', store: true, attributes: { boost: 10 } },
          { name: 'slug', store: true },
          // { name: 'content' }
          // Let's skip references
          // { name: 'topics' },
          // { name: 'technologies' }
        ],
        resolvers: {
          Tip: {
            title: node => node.title,
            subtitle: node => node.subtitle,
            slug: node => node.slug,
          },
          // Mdx: {
          //   title: node => node.frontmatter.title,
          //   subtitle: node => node.frontmatter.subtitle,
          //   // slug: node => node.fields.slug,
          //   content: node => node.rawMarkdownBody,
          //   // topics: node => node.frontmatter.topics ? node.frontmatter.topics.join(" ") : "",
          //   // technologies: node => node.frontmatter.technologies ? node.frontmatter.technologies.join(" ") : ""
          // }
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


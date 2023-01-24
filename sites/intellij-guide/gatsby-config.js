module.exports = {
  siteMetadata: {
    // Used by feed
    title: 'IntelliJ IDEA Guide',
    description: 'Be more productive and write high-quality code faster with a series of tips and tricks',
    siteUrl: 'https://www.jetbrains.com/idea/guide/',
    theme: {
      helmet: {
        siteTitle: 'IntelliJ IDEA Guide'
      },
      navbar: {
        brand: {
          githubUrl: 'https://github.com/JetBrains/jetbrains_guide',
          twitterUrl: 'https://twitter.com/intellijidea',
          twitterAccount: '@intellijidea',
          twitterCardFallbackImage: 'https://resources.jetbrains.com/storage/products/jetbrains/img/meta/preview.png'
        },
        start: {
          items: [
            {
              accent: 'success',
              cssClass: 'documentation',
              href: '/tips/',
              label: 'All Tips',
              icon: 'fas fa-play-circle'
            },
            {
              accent: 'info',
              cssClass: 'documentation',
              href: '/tutorials/',
              label: 'Tutorials',
              icon: 'fas fa-tasks'
            },
            {
              accent: 'warning',
              cssClass: 'documentation',
              href: '/playlists/',
              label: 'Playlists',
              icon: 'fas fa-list'
            },
            {
              accent: 'danger',
              cssClass: 'documentation',
              href: '/technologies/',
              label: 'Technologies',
              icon: 'fas fa-project-diagram'
            },
            {
              accent: 'danger',
              cssClass: 'documentation',
              href: '/topics/',
              label: 'Topics',
              icon: 'fas fa-book-open'
            },
            {
              accent: 'warning',
              cssClass: 'documentation',
              href: '/about/',
              label: 'About',
              icon: 'fas fa-file'
            },
            {
              label: 'Skip',
              items: [
                {
                  href: '/authors/',
                  label: 'Authors',
                  icon: 'fas fa-users',
                  accent: 'success',
                  description: 'Resource listing organized by author'
                }
              ]
            }
          ]
        },
        end: {
          buttons: [
            {
              accent: 'light',
              href: 'https://jb.gg/zws7og',
              label: 'Get IntelliJ IDEA'
            }
          ],
          links: [
            {
              color: 'light',
              href: 'https://github.com/jetbrains/jetbrains_guide',
              icon: 'github'
            },
            {
              color: '55acee',
              href: 'https://twitter.com/intellijidea',
              icon: 'twitter'
            }
          ]
        }
      },
      footer: {
        copyright: 'Copyright © 2000–2023 <a href="https://www.jetbrains.com/">JetBrains</a> s.r.o.'
      }
    }
  },
  pathPrefix: '/idea/guide',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-theme-bulmaio',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-embed-snippet`,
            options: {
              directory: `${__dirname}/demos/`
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: 'gatsby-remark-embed-snippet',
            options: {
              directory: `${__dirname}/demos/`
            }
          },
          `gatsby-remark-copy-linked-files`
        ]
      }
    }
  ]
};

module.exports = {
  siteMetadata: {
    theme: {
      helmet: {
        siteTitle: '.NET Guide'
      },
      navbar: {
        brand: {
          githubUrl: 'https://github.com/JetBrains/jetbrains_guide',
          twitterUrl: 'https://twitter.com/ReSharper',
          twitterAccount: '@ReSharper'
        },
        start: {
          items: [
            {
              accent: 'success',
              cssClass: 'documentation',
              href: '/tips/',
              label: 'Tips',
              icon: 'fas fa-play-circle'
            },
            {
              accent: 'info',
              cssClass: 'documentation',
              href: '/products/',
              label: 'Products',
              icon: 'fas fa-tasks'
            },
            {
              accent: 'danger',
              cssClass: 'documentation',
              href: '/topics/',
              label: 'Topics',
              icon: 'fas fa-project-diagram'
            },
            {
              accent: 'info',
              cssClass: 'documentation',
              href: '/about/',
              label: 'About',
              icon: 'fas fa-file'
            },
            {
              label: 'More...',
              items: [
                {
                  href: '/technologies/',
                  label: 'Technologies',
                  icon: 'fas fa-project-diagram',
                  accent: 'danger',
                  description: 'Resource listing organized by technology'
                },
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
              href: 'https://www.jetbrains.com/dotnet/promo/tools/',
              label: 'Get JetBrains .NET tools'
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
              href: 'https://twitter.com/ReSharper',
              icon: 'custom-resharper'
            },
            {
              color: '55acee',
              href: 'https://twitter.com/JetBrainsRider',
              icon: 'custom-rider'
            }
          ]
        }
      },
      footer: {
        copyright: 'Copyright © 2000–2020 JetBrains s.r.o.'
      }
    }
  },
  pathPrefix: '/dotnet/guide',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    'gatsby-theme-bulmaio',
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
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-'
            }
          },
          `gatsby-remark-copy-linked-files`
        ]
      }
    }
  ]
};

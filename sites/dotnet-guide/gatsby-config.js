module.exports = {
  siteMetadata: {
    title: '.NET Guide',
    description: 'Be more productive and write high-quality code faster with a series of tips and tricks',
    siteUrl: 'https://www.jetbrains.com/dotnet/guide/', // Used by feed
    theme: {
      helmet: {
        siteTitle: '.NET Guide'
      },
      navbar: {
        brand: {
          githubUrl: 'https://github.com/JetBrains/jetbrains_guide',
          twitterUrl: 'https://twitter.com/ReSharper',
          twitterAccount: '@ReSharper',
          twitterCardFallbackImage: 'https://resources.jetbrains.com/storage/products/jetbrains/img/meta/preview.png'
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
              icon: 'fas fa-box-open'
            },
            {
              accent: 'info',
              cssClass: 'documentation',
              href: '/tutorials/',
              label: 'Tutorials',
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
              accent: 'danger',
              cssClass: 'documentation',
              href: '/technologies/',
              label: 'Technologies',
              icon: 'fas fa-project-diagram'
            },
            {
              accent: 'success',
              cssClass: 'documentation',
              href: '/authors/',
              label: 'Authors',
              icon: 'fas fa-users'
            },
            {
              accent: 'info',
              cssClass: 'documentation',
              href: '/about/',
              label: 'About',
              icon: 'fas fa-file'
            },
            {
              label: 'Skip', // hides the "More..." section
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
              label: 'Get JetBrains .NET Tools'
            }
          ],
          links: [
            {
              color: 'light',
              href: 'https://github.com/jetbrains/jetbrains_guide/',
              icon: 'github'
            },
            // {
            //   color: '55acee',
            //   href: 'https://www.jetbrains.com/resharper/',
            //   icon: 'custom-resharper'
            // },
            // {
            //   color: '55acee',
            //   href: 'https://www.jetbrains.com/rider/',
            //   icon: 'custom-rider'
            // }
          ]
        }
      },
      footer: {
        copyright: 'Copyright © 2000–2023 <a href="https://www.jetbrains.com/">JetBrains</a> s.r.o.'
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

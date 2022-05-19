module.exports = {
    siteMetadata: {
        title: 'PyCharm Guide',
        description: 'Be more productive and write high-quality code faster with a series of tips and tricks',
        siteUrl: 'https://www.jetbrains.com/pycharm/guide/', // Used by feed
        theme: {
            helmet: {
                siteTitle: 'PyCharm Guide'
            },
            navbar: {
                brand: {
                    githubUrl: 'https://github.com/jetbrains/jetbrains_guide',
                    twitterUrl: 'https://twitter.com/pycharm',
                    twitterAccount: '@PyCharm',
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
                            icon: 'fas fa-project-diagram'
                        },
                        {
                            label: 'More...',
                            items: [
                                {
                                    href: '/authors/',
                                    label: 'Authors',
                                    icon: 'fas fa-users',
                                    accent: 'success',
                                    description: 'Resource listing organized by author'
                                },
                                {
                                    href: '/about/',
                                    label: 'About',
                                    icon: 'fas fa-file',
                                    accent: 'info',
                                    description: 'About the PyCharm Guide'
                                }
                            ]
                        }
                    ]
                },
                end: {
                    buttons: [
                        {
                            accent: 'light',
                            href: 'https://www.jetbrains.com/pycharm/download/',
                            label: 'Get PyCharm'
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
                            href: 'https://twitter.com/pycharm',
                            icon: 'twitter'
                        }
                    ]
                    }
                },
            footer: {
                copyright: 'Copyright © 2000–2022 <a href="https://www.jetbrains.com/">JetBrains</a> s.r.o.'
            }
        }
    },
    pathPrefix: '/pycharm/guide',
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

module.exports = {
    siteMetadata: {
        title: 'GoLand Guide',
        description: 'Be more productive and write high-quality code faster with a series of tips and tricks',
        siteUrl: 'https://www.jetbrains.com/go/guide/', // Used by feed
        theme: {
            helmet: {
                siteTitle: 'GoLand Guide'
            },
            navbar: {
                brand: {
                    githubUrl: 'https://github.com/JetBrains/jetbrains_guide',
                    twitterUrl: 'https://twitter.com/GoLandIDE',
                    twitterAccount: '@GoLandIDE',
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
                            accent: 'warning',
                            cssClass: 'documentation',
                            href: '/playlists/',
                            label: 'Playlists',
                            icon: 'fas fa-list'
                        },
                        {
                            accent: 'danger',
                            cssClass: 'documentation',
                            href: '/topics/',
                            label: 'Topics',
                            icon: 'fas fa-tags'
                        },
                        {
                            accent: 'danger',
                            cssClass: 'documentation',
                            href: '/technologies/',
                            label: 'Technologies',
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
                                    description: 'About the GoLand Guide'
                                }
                            ]
                        }
                    ]
                },
                end: {
                    buttons: [
                        {
                            accent: 'light',
                            href: 'https://www.jetbrains.com/go/download/',
                            label: 'Get GoLand'
                        }
                    ],
                    links: [
                        {
                            color: 'FFFFFF',
                            href: 'https://blog.jetbrains.com/go',
                            icon: 'fa fa-blog'
                        },
                        {
                            color: 'FFFFFF',
                            href: 'https://www.jetbrains.com/help/go',
                            icon: 'fa fa-question'
                        },
                        {
                            color: 'light',
                            href: 'https://github.com/jetbrains/jetbrains_guide',
                            icon: 'fab fa-lg fa-github'
                        },
                        {
                            color: '55acee',
                            href: 'https://twitter.com/GoLandIDE',
                            icon: 'fab fa-lg fa-twitter'
                        }
                    ]
                }
            },
            footer: {
                copyright: 'Copyright © 2000–2022 <a href="https://www.jetbrains.com/">JetBrains</a> s.r.o.'
            }
        }
    },
    pathPrefix: '/go/guide',
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

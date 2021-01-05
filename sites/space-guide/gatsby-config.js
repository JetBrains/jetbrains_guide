module.exports = {
    siteMetadata: {
    title: 'Space Guide',
    description: 'Be more productive with a series of tips and tricks',
        siteUrl: 'https://www.jetbrains.com/space/guide/', // Used by feed
        theme: {
            helmet: {
                siteTitle: 'Space Guide'
            },
            navbar: {
                brand: {
                    githubUrl: 'https://github.com/JetBrains/jetbrains_guide/',
                    twitterUrl: 'https://twitter.com/JetBrains_Space/',
                    twitterAccount: '@JetBrains_Space'
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
                            href: 'https://www.jetbrains.com/space/',
                            label: 'Try Space'
                        }
                    ],
                    links: [
                        {
                            color: 'light',
                            href: 'https://github.com/jetbrains/jetbrains_guide/',
                            icon: 'github'
                        },
                        {
                            color: '55acee',
                            href: 'https://twitter.com/JetBrains_Space/',
                            icon: 'twitter'
                        }
                    ]
                }
            },
            footer: {
                copyright: 'Copyright © 2000–2021 <a href="https://www.jetbrains.com/">JetBrains</a> s.r.o.'
            }
        }
    },
    pathPrefix: '/space/guide',
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

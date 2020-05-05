module.exports = {
    siteMetadata: {
        theme: {
            helmet: {
                siteTitle: 'WebStorm Guide'
            },
            navbar: {
                brand: {
                    githubUrl: 'https://github.com/JetBrains/jetbrains_guide',
                    twitterUrl: 'https://twitter.com/webstorm',
                    twitterAccount: '@WebStormIDE'
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
                            href: 'https://www.jetbrains.com/webstorm/download/',
                            label: 'Skip'
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
                            href: 'https://twitter.com/WebStormIDE',
                            icon: 'twitter'
                        }
                    ]
                }
            },
            footer: {
                copyright: 'Copyright © 2000–2020 JetBrains s.r.o.'
            }
        }
    },
    pathPrefix: '/webstorm/guide',
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

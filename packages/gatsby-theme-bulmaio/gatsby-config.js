module.exports = {
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-typescript`,
        `gatsby-transformer-yaml`,
        'gatsby-plugin-sass',
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
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-'
                        }
                    },
                    `gatsby-remark-copy-linked-files`
                ]
            }
        },
        {
            resolve: `gatsby-remark-images`,
            options: {
                maxWidth: 1080
            }
        },
    ]
};


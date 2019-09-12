module.exports = {
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-offline`,
        `gatsby-transformer-yaml`,
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-remark-images`,
            options: {
                maxWidth: 1080
            }
        },
    ]
};


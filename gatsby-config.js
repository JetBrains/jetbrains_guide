module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Sample`
  },
  mapping: {
    'MarkdownRemark.fields.author': `MarkdownRemark.id`,
    'MarkdownRemark.fields.technologies': `MarkdownRemark.id`,
    'MarkdownRemark.fields.topics': `MarkdownRemark.id`,
    'MarkdownRemark.fields.tips': `MarkdownRemark.id`,
    'MarkdownRemark.fields.tutorialsteps': `MarkdownRemark.id`,
    'MarkdownRemark.fields.tutorialsteps.fields.author': `MarkdownRemark.id`,
    'MarkdownRemark.fields.tutorial': `MarkdownRemark.id`
  },
  pathPrefix: '/pycharm/guide',
  plugins: [
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    'gatsby-plugin-manifest',
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-47631155-3`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080
            }
          },
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-embed-snippet',
            options: {
              directory: `${__dirname}/demos/`
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-'
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-remark-references`,
      options: {
        types: {
          author: {
            plural: `authors`,
            listing: `src/types/authors/Authors.tsx`,
            item: `src/types/authors/Author.tsx`
          },
          technology: {
            plural: `technologies`,
            listing: `src/types/technologies/Technologies.tsx`,
            item: `src/types/technologies/Technology.tsx`
          },
          topic: {
            plural: `topics`,
            listing: `src/types/topics/Topics.tsx`,
            item: `src/types/topics/Topic.tsx`
          },
          tip: {
            plural: `tips`,
            listing: `src/types/tips/Tips.tsx`,
            item: `src/types/tips/Tip.tsx`
          },
          tutorial: {
            plural: `tutorials`,
            listing: `src/types/tutorials/Tutorials.tsx`,
            item: `src/types/tutorials/Tutorial.tsx`
          },
        }
      }
    }
  ]
};

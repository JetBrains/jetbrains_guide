import {  resolve } from 'path';

const resolvers = (createResolvers: any) => {
  createResolvers({
    MarkdownRemark: {
      inPlaylists: {
        type: ['MarkdownRemark'],
        async resolve(source: any, args: any, context: any, info: any) {
          const thisSlug: string = source.fields.slug;
          // noinspection UnnecessaryLocalVariableJS
          const markdownNodes = context.nodeModel.getAllNodes()
            .filter((playlistNode: any) => {
              if (playlistNode.frontmatter) {
                if (playlistNode.frontmatter.type === 'playlist') {
                  const playlistItems = playlistNode.frontmatter.playlistItems;
                  if (playlistItems.length > 0) {
                    return playlistItems.includes(thisSlug);
                  }
                }
              }
            });
          return markdownNodes;
        }
      },
      inTutorial: {
        type: 'MarkdownRemark',
        async resolve(source: any, args: any, context: any, info: any) {
          const thisSlug: string = source.fields.slug;
          const parentSlug = `${resolve(thisSlug, '..')}/`;
          // noinspection UnnecessaryLocalVariableJS
          const parentNode = context.nodeModel.getAllNodes()
            .filter((node: any) => node.frontmatter && node.frontmatter.type === 'tutorial')
            .find((node: any) => node.fields.slug === parentSlug);
          return parentNode;
        }
      }

    },
    Query: {
      allResourcesByType: {
        type: ['MarkdownRemark'],
        args: {
          resourceType: 'String'
        },
        resolve(source: any, args: any, context: any, info: any) {
          const rt = args.resourceType;
          // Must have a date more recent than Y2K
          const queryFilter = {date: {gt: '2000-01-01'}};
          if (rt) {
            // @ts-ignore
            queryFilter.type = { eq: rt };
          }
          return context.nodeModel.runQuery({
            query: {
              filter: {
                frontmatter: queryFilter
              },
              sort: { fields: ['frontmatter.date'], order: ['DESC'] }
            },
            type: `MarkdownRemark`
          });
        }
      }
    },
    AuthorYaml: {
      slug: {
        type: `String!`,
        resolve(source: any, args: any, context: any, info: any) {
          return `/authors/${source.label}/`;
        }
      }
    },
    TechnologyYaml: {
      slug: {
        type: `String!`,
        resolve(source: any, args: any, context: any, info: any) {
          return `/technologies/${source.label}/`;
        }
      }
    },
    TopicYaml: {
      slug: {
        type: `String!`,
        resolve(source: any, args: any, context: any, info: any) {
          return `/topics/${source.label}/`;
        }
      }
    },
  });
};

module.exports = resolvers;

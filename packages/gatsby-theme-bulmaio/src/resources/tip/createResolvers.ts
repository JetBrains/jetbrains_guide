export const tipCreateResolvers = async (createResolvers: any) => {
  createResolvers({
    Tip: {
      inPlaylists: {
        type: ['Playlist'],
        async resolve(source: any, args: any, context: any, info: any) {
          const thisSlug: string = source.slug;
          // noinspection UnnecessaryLocalVariableJS
          const playlistNodes = context.nodeModel.getAllNodes({ type: `Playlist` })
            .filter((playlistNode: any) => {
              const playlistItems = playlistNode.playlistItems;
              if (playlistItems.length > 0) {
                return playlistItems.includes(thisSlug);
              }
            });
          return playlistNodes;
        }
      }
    }
  });
};

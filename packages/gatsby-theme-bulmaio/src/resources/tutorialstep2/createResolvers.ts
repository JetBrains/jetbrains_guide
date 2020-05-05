import { resolve } from 'path';

export const tutorialStep2CreateResolvers = async (createResolvers: any) => {
  // noinspection JSUnusedLocalSymbols
  createResolvers({
    TutorialStep2: {
      inTutorial: {
        type: 'Tutorial2',
        async resolve(source: any, args: any, context: any, info: any) {
          const thisSlug: string = source.slug;
          const parentSlug = `${resolve(thisSlug, '..')}/`;
          // noinspection UnnecessaryLocalVariableJS
          const parentNode = context.nodeModel.getAllNodes({ type: `Tutorial2` })
            .find((node: any) => node.slug === parentSlug);
          return parentNode;
        }
      }
    }
  });
};


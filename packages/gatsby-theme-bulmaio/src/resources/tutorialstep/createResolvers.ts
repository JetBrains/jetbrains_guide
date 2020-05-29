import { posix } from 'path';

export const tutorialStepCreateResolvers = async (createResolvers: any) => {
  // noinspection JSUnusedLocalSymbols
  createResolvers({
    TutorialStep: {
      inTutorial: {
        type: 'Tutorial',
        async resolve(source: any, args: any, context: any, info: any) {
          const thisSlug: string = source.slug;
          const parentSlug = `${posix.resolve(thisSlug, '..')}/`;
          // noinspection UnnecessaryLocalVariableJS
          const parentNode = context.nodeModel.getAllNodes({ type: `Tutorial` })
            .find((node: any) => node.slug === parentSlug);
          return parentNode;
        }
      }
    }
  });
};

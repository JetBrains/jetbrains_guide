import { GatsbyCreatePages } from './types';
import createTips from './createTips';
import createTechnologies from './createTechnologies';
import createAuthors from './createAuthors';
import createTopics from './createTopics';
// import createTutorials from './createTutorials';
// import createTutorialSteps from './createTutorialSteps';

const createPages: GatsbyCreatePages = async ({ graphql, boundActionCreators }) => {
  createAuthors({ graphql, boundActionCreators });
  createTechnologies({ graphql, boundActionCreators });
  createTopics({ graphql, boundActionCreators });

  // Create the type pages
  createTips({ graphql, boundActionCreators });
  // createTutorials({ graphql, boundActionCreators });
  // createTutorialSteps({ graphql, boundActionCreators });
};

module.exports = createPages;

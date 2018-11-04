import { GatsbyCreatePages } from './types';
import createTips from './createTips';
import createTechnologies from './createTechnologies';
import createAuthors from './createAuthors';
import createTopics from './createTopics';

const createPages: GatsbyCreatePages = async ({
                                                graphql,
                                                boundActionCreators
                                              }) => {

  createAuthors({ graphql, boundActionCreators });
  createTechnologies({ graphql, boundActionCreators });
  createTopics({ graphql, boundActionCreators });

  // Create the tip pages
  createTips({ graphql, boundActionCreators });
};

module.exports = createPages;

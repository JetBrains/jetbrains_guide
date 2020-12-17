/* eslint-disable @typescript-eslint/no-unused-vars */
import { resourcesCreateResolvers } from '../resources/gatsby-setup';
import {referencesCreateResolvers} from '../references/gatsby-setup';

// noinspection JSUnusedLocalSymbols
export const setupCreateResolvers = async (createResolvers: any) => {
  await resourcesCreateResolvers(createResolvers);
  await referencesCreateResolvers(createResolvers);
};

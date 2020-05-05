/* eslint-disable @typescript-eslint/no-unused-vars */
import { resourcesCreateResolvers } from '../resources/gatsby-setup';

// noinspection JSUnusedLocalSymbols
export const setupCreateResolvers = async (createResolvers: any) => {
  await resourcesCreateResolvers(createResolvers);
};

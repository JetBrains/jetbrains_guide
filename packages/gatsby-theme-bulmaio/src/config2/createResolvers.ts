/* eslint-disable @typescript-eslint/no-unused-vars */
import { resourcesCreateResolvers } from '../resources/gatsby-setup';

export interface ResolversProps {
  createResolvers: any
}

// noinspection JSUnusedLocalSymbols
export const setupCreateResolvers = async ({ createResolvers }: ResolversProps) => {
  await resourcesCreateResolvers(createResolvers);
};

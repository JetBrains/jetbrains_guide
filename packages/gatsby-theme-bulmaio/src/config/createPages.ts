import { resourcesCreatePages } from '../resources/gatsby-setup'
import { referencesCreatePages } from '../references/gatsby-setup'

export const setupCreatePages = async (actions: any, graphql: any) => {
  await resourcesCreatePages(graphql, actions)
  await referencesCreatePages(graphql, actions)
}

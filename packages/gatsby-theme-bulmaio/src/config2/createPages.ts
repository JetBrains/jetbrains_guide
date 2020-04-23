import { resourcesCreatePages } from '../resources/gatsby-setup'
import { referencesCreatePages } from '../references/gatsby-setup'

export const setupCreatePages = async ({ graphql, actions }: any) => {
  await resourcesCreatePages(graphql, actions)
  await referencesCreatePages(graphql, actions)
}

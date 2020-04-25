import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components2/Layout'
import { TopicReference } from './models'

export interface TopicIndexProps {
  data: {
    allTopic: {
      nodes: TopicReference[]
    }
  }
}

const AllTopic: FunctionComponent<TopicIndexProps> = ({ data: { allTopic } }: TopicIndexProps) => {
  return (
    <Layout>
      <h1>All Topics</h1>
      <ul>
        {allTopic.nodes.map(node => (
          <li key={node.slug}>
            <Link to={node.slug}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

// noinspection JSUnusedGlobalSymbols
export default AllTopic

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query {
    allTopic {
      nodes {
        title
        slug
        body
      }
    }
  }
`

import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components2/Layout'

export interface AuthorIndexProps {
  data: {
    allAuthor: {
      nodes: { title: string; slug: string; body: string }[]
    }
  }
}

const AllAuthor: FunctionComponent<AuthorIndexProps> = ({
  data: { allAuthor }
}: AuthorIndexProps) => {
  return (
    <Layout>
      <h1>All Authors</h1>
      <ul>
        {allAuthor.nodes.map(node => (
          <li key={node.slug}>
            <Link to={node.slug}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

// noinspection JSUnusedGlobalSymbols
export default AllAuthor

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query {
    allAuthor {
      nodes {
        title
        slug
        body
      }
    }
  }
`

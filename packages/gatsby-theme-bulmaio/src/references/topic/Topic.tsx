import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../../components/Layout'
import { TopicReference } from './models'

export interface TopicProps {
  data: {
    topic: TopicReference
  }
}

const Topic: FunctionComponent<TopicProps> = ({
  data: {
    topic: { title, body, resources }
  }
}: TopicProps) => {
  return (
    <Layout>
      <div style={{ margin: '3em' }}>
        <h1>{title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
        <h2>Resources</h2>
        <ul>
          {resources.map(resource => (
            <li key={resource.slug}>
              <Link to={resource.slug}>{resource.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

// noinspection JSUnusedGlobalSymbols
export default Topic

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query($slug: String!) {
    topic(slug: { eq: $slug }) {
      ...ReferenceInfo
    }
  }
`

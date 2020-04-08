import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../../components/Layout'
import { Resource } from '../../resources/models'

export interface Author extends Resource {
  resources: Resource[]
}

export interface AuthorProps {
  data: {
    author: Author
  }
}

const Author: FunctionComponent<AuthorProps> = ({
  data: {
    author: { title, body, resources }
  }
}: AuthorProps) => {
  return (
    <Layout>
      <div style={{ margin: '3em' }}>
        <h1>{title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
        {resources && (
          <div>
            <h2>Resources</h2>
            <ul>
              {resources.map(resource => (
                <li key={resource.slug}>
                  <Link to={resource.slug}>{resource.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Author

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query($slug: String!) {
    author(slug: { eq: $slug }) {
      ...ReferenceInfo
    }
  }
`

import React, { FunctionComponent } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import 'rbx/index.css'
import Header from './Header/Header'
import { GlobalProps } from './Header/Global'

export interface LayoutData {
  site: {
    siteMetadata: {
      theme: {
        helmet: {
          siteTitle: string
        }
      }
    }
  }
}

const Layout: FunctionComponent = ({ children }) => {
  const {
    site: {
      siteMetadata: { theme }
    }
  }: LayoutData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          theme {
            helmet {
              siteTitle
            }  
          }
        }
      }
    }
  `)

  const globalProps: GlobalProps = { label: theme.helmet.siteTitle, to: '/' }
  return (
    <>
      <Header global={globalProps} />
      <div>{children}</div>
    </>
  )
  // return (
  //   <Content>
  //     <header>
  //       <h1>{data.site.siteMetadata.title}</h1>
  //       <Link to={`/`}>Home</Link>
  //       <span style={{ paddingLeft: '0.2em', paddingRight: '0.2em' }}>|</span>
  //       <ResourceTypesMenu />
  //     </header>
  //     <div>{children}</div>
  //   </Content>
  // )
}

export default Layout

// Define some fragments used everywhere
// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  fragment ResourceInfo on Resource {
    slug
    title
    body
    author {
      slug
      title
    }
    topics {
      slug
      title
    }
  }
  fragment ReferenceInfo on Reference {
    slug
    title
    body
    resources {
      slug
      title
    }
  }
`

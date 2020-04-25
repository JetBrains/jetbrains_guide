/*

The top-left panel in the header, provides a link to the
JetBrains Guide root of the site.

 */
import React, { FunctionComponent } from 'react'

export interface GlobalProps {
  label: string
  to: string
}
const Global: FunctionComponent<GlobalProps> = ({ label, to }) => {
  return (
    <nav>
      The Heading
    </nav>
  )
}

export default Global

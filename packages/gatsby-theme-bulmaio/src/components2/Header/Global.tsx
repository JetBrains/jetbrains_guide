/*

The top-left panel in the header, provides a link to the
JetBrains Guide root of the site.

 */
import React, { FunctionComponent } from 'react'
import { Navbar } from 'rbx'

export interface GlobalProps {
  label: string
  to: string
}
const Global: FunctionComponent<GlobalProps> = ({ label, to }) => {
  return (
    <Navbar.Brand>
      <Navbar.Item href={to}>
        <img
          src="https://bulma.io/images/bulma-logo.png"
          alt={label}
          role="presentation"
          width="112"
          height="28"
        />
      </Navbar.Item>
      <Navbar.Burger />
    </Navbar.Brand>
  )
}

export default Global

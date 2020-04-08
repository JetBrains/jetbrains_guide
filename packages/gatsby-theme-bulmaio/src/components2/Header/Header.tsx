/*

The navbar component for this site

 */
import React, { FunctionComponent } from 'react'
import { Navbar, Button } from 'rbx'

import Global from './Global'

export interface HeaderProps {
  global: {
    label: string
    to: string
  }
}

const Header: FunctionComponent<HeaderProps> = ({ global }) => {
  return (
    <Navbar>
      <Global {...global} />
      <Navbar.Menu>
        <Navbar.Segment align="start">
          <Navbar.Item>Home</Navbar.Item>
          <Navbar.Item>Documentation</Navbar.Item>

          <Navbar.Item dropdown>
            <Navbar.Link>More</Navbar.Link>
            <Navbar.Dropdown>
              <Navbar.Item>About</Navbar.Item>
              <Navbar.Item>Jobs</Navbar.Item>
              <Navbar.Item>Contact</Navbar.Item>
              <Navbar.Divider />
              <Navbar.Item>Report an issue</Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
        </Navbar.Segment>

        <Navbar.Segment align="end">
          <Navbar.Item>
            <Button.Group>
              <Button color="primary">
                <strong>Sign up</strong>
              </Button>
              <Button color="light">Log in</Button>
            </Button.Group>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  )
}

export default Header

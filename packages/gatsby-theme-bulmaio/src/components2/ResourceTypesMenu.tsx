import React from 'react'
import TypeMenu from './TypeMenu'
import { resourceTypes } from '../resources/gatsby-setup'
import { referenceTypes } from '../references/gatsby-setup'

const ResourceTypesMenu = () => {
  return (
    <span>
      <TypeMenu typesInfo={Object.values(resourceTypes)} />
      <span style={{ paddingLeft: '0.2em', paddingRight: '0.2em' }}>|</span>
      <TypeMenu typesInfo={Object.values(referenceTypes)} />
    </span>
  )
}

export default ResourceTypesMenu

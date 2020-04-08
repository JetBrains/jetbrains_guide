import React from 'react'
import { Link } from 'gatsby'

export interface TypeInfo {
  pathname: string
  plural: string
}

export interface TypeMenuProps {
  typesInfo: TypeInfo[]
}

const TypeMenu = ({ typesInfo }: TypeMenuProps) => {
  return (
    <span>
      {typesInfo.map(({ plural, pathname }) => (
        <Link key={plural} to={`/${pathname}/`} style={{ padding: '0.4em' }}>
          {plural}
        </Link>
      ))}
    </span>
  )
}

export default TypeMenu

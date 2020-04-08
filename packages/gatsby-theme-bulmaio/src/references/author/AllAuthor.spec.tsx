import React from 'react'
import { useStaticQuery } from 'gatsby'
import { render } from '@testing-library/react'

import AllAuthor from './AllAuthor'
import { LayoutData } from '../../components/Layout'

beforeEach(() => {
  const usq = useStaticQuery as jest.Mock<LayoutData>
  usq.mockImplementation(() => {
    return {
      site: {
        siteMetadata: {
          title: `My Site`
        }
      }
    }
  })
})

test('Header', async () => {
  const authorData = {
    allAuthor: {
      nodes: [
        {
          title: 'First Title',
          slug: 'First Slug',
          body: 'First Body'
        }
      ]
    }
  }
  const { getByText } = render(<AllAuthor data={authorData} />)
  expect(getByText('All Authors').tagName).toBe('H1')
})

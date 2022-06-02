/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import * as Gatsby from 'gatsby';

const withPrefix = jest.spyOn(Gatsby, 'withPrefix');
withPrefix.mockImplementation(src => {
  return src;
});

import {
  ResourceCardAuthor,
  ResourceCardAuthorProps,
} from './ResourceCardAuthor';

export const DUMMY_RCA: ResourceCardAuthorProps = {
  slug: '/slug1',
  title: 'title1',
  thumbnail: {
    publicURL: '/publicURL1',
    childImageSharp: {
      resized: {
        src: 'image1.png',
        height: 1,
        width: 1,
        originalName: '',
      },
      gatsbyImageData: {},
    },
  },
};

it('ResourceCardAuthor', () => {
  const { getByText, getByAltText } = render(
    <ResourceCardAuthor {...DUMMY_RCA} />
  );
  expect(getByText(DUMMY_RCA.title as string)).toBeTruthy();
  expect(getByAltText('rca-fluid')).toBeTruthy();
  expect(getByAltText('rca-fluid').getAttribute('src')).toEqual('image1.png');
});

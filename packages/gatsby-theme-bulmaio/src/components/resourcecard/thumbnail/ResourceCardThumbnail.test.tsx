/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import * as Gatsby from 'gatsby';

import {
  ResourceCardThumbnail,
  ResourceCardThumbnailProps,
} from './ResourceCardThumbnail';

const withPrefix = jest.spyOn(Gatsby, 'withPrefix');
withPrefix.mockImplementation(src => {
  return src;
});

export const DUMMY_RCTH: ResourceCardThumbnailProps = {
  thumbnail: {
    publicURL: '',
    childImageSharp: {
      resized: {
        originalName: '',
        width: 1,
        height: 1,
        src: 'image1.png',
      },
      gatsbyImageData: {},
    },
  },
};

test('ResourceCardThumbnail', () => {
  const { getByAltText } = render(<ResourceCardThumbnail {...DUMMY_RCTH} />);
  expect(getByAltText('rcg-thumbnail').getAttribute('src')).toEqual(
    'image1.png'
  );
});

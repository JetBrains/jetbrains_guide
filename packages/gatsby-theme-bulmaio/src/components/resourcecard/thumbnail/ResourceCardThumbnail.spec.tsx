import React from 'react';
import { render } from '@testing-library/react';

import {ResourceCardThumbnail, ResourceCardThumbnailProps } from './ResourceCardThumbnail';

export const DUMMY_RCTH: ResourceCardThumbnailProps = {
  thumbnail: {
    publicURL: "",
    childImageSharp : {
      resized : {
        originalName : "",
        width : 1,
        height : 1,
        src : ""
      },
      gatsbyImageData : {
        
      }
    }
  }
};

test('ResourceCardThumbnail', () => {
  const { getByAltText } = render(<ResourceCardThumbnail {...DUMMY_RCTH}/>);
  expect(getByAltText('rcg-thumbnail')).toHaveAttribute('sizes', '987');
});

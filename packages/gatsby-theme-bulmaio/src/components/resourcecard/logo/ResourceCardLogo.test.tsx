/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';

import { ResourceCardLogo, ResourceCardLogoProps } from './ResourceCardLogo';
import { DUMMY_RCTH } from '../thumbnail/ResourceCardThumbnail.test';

export const DUMMY_RCL: ResourceCardLogoProps = {
  thumbnail: DUMMY_RCTH.thumbnail,
};

test('ResourceCardLogo', () => {
  const { queryByTestId } = render(<ResourceCardLogo {...DUMMY_RCL} />);
  expect(queryByTestId('rcl-publicURL')).toHaveAttribute('src', 'image1.png');
});

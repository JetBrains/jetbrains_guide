import React from 'react';
import { render } from '@testing-library/react';

import { ResourceCardLogo, ResourceCardLogoProps } from './ResourceCardLogo';

export const DUMMY_RCL: ResourceCardLogoProps = {
  publicURL: '/publicURL1'
};

test('ResourceCardLogo', () => {
  const { queryByTestId } = render(<ResourceCardLogo {...DUMMY_RCL}/>);
  expect(queryByTestId('rcl-publicURL')).toHaveAttribute('src', DUMMY_RCL.publicURL);
});

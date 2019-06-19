import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import { ResourceCardLogo, ResourceCardLogoProps } from './ResourceCardLogo';

export const DUMMY_RCL: ResourceCardLogoProps = {
  publicURL: '/publicURL1'
};

test('ResourceCardLogo', () => {
  const { queryByTestId } = render(<ResourceCardLogo {...DUMMY_RCL}/>);
  expect(queryByTestId('rcl-publicURL')).toHaveAttribute('src', DUMMY_RCL.publicURL);
});

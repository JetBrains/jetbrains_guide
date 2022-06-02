/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';

import NavbarBrand, { NavbarBrandProps } from './NavbarBrand';

export const DUMMY_BRAND: NavbarBrandProps = {
  githubUrl: 'githubUrl1',
  twitterUrl: 'twitterUrl1',
};

test('NavbarBrand', () => {
  const { getByRole } = render(<NavbarBrand {...DUMMY_BRAND} />);

  const burger = getByRole('burger');
  expect(burger).toBeTruthy();
});

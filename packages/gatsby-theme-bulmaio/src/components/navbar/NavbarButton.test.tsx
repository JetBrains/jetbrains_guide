/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';

import NavbarButton, { NavbarButtonProps } from './NavbarButton';

export const DUMMY_BUTTON: NavbarButtonProps = {
  accent: 'accent1',
  href: '/href1',
  label: 'label1',
};

test('NavbarButton', () => {
  const { getByTestId, getByText } = render(<NavbarButton {...DUMMY_BUTTON} />);
  const a = getByTestId('navbutton-a');
  expect(a).toHaveClass(`is-${DUMMY_BUTTON.accent}`);
  expect(a).toHaveAttribute('href', DUMMY_BUTTON.href);
  expect(getByText(DUMMY_BUTTON.label)).toBeTruthy();
});

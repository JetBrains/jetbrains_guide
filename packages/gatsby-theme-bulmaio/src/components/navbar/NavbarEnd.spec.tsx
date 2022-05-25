/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';

import NavbarEnd, { NavbarEndProps } from './NavbarEnd';
import { NavbarLinkProps } from './NavbarLink';
import { DUMMY_LINK } from './NavbarLink.spec';
import { NavbarButtonProps } from './NavbarButton';
import { DUMMY_BUTTON } from './NavbarButton.spec';

const DUMMY_LINKS: NavbarLinkProps[] = [DUMMY_LINK];

const DUMMY_BUTTONS: NavbarButtonProps[] = [DUMMY_BUTTON];

export const DUMMY_END: NavbarEndProps = {
  links: DUMMY_LINKS,
  buttons: DUMMY_BUTTONS,
};

test('NavbarEnd', () => {
  const { getByTestId, getByText } = render(<NavbarEnd {...DUMMY_END} />);

  // LINK
  // href
  const a = getByTestId('navbarlink-a');
  expect(a).toHaveAttribute('href', DUMMY_LINK.href);

  // color
  const span = getByTestId('navbarlink-span');
  expect(span).toHaveStyle(`color: #color1`);

  // icon
  const i = getByTestId('navbarlink-i');
  expect(i).toHaveClass(`fa-${DUMMY_LINK.icon}`);

  // BUTTON
  const button = getByTestId('navbutton-a');
  expect(button).toHaveClass(`is-${DUMMY_BUTTON.accent}`);
  expect(button).toHaveAttribute('href', DUMMY_BUTTON.href);
  expect(getByText(DUMMY_BUTTON.label)).toBeTruthy();
});

/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';

import NavbarStart, { NavbarStartProps } from './NavbarStart';
import { DUMMY_MENUITEM } from './NavbarMenuItem.spec';
import { DUMMY_SUBMENU } from './NavbarSubMenu.spec';
import { DUMMY_SUBITEM } from './NavbarSubItem.spec';

export const DUMMY_START: NavbarStartProps = {
  items: [DUMMY_MENUITEM, DUMMY_SUBMENU],
};

test('NavbarStart', () => {
  const { getByTestId } = render(<NavbarStart {...DUMMY_START} />);

  // #### MENUITEM
  const menuitem = getByTestId('navbarmenuitem-link');
  expect(menuitem).toHaveClass(`bd-navbar-item-${DUMMY_MENUITEM.cssClass}`);
  expect(menuitem).toHaveAttribute('href', DUMMY_MENUITEM.href);

  // #### SUBMENU
  const submenu = getByTestId('navbarsubitem-link');
  expect(submenu).toHaveAttribute('href', DUMMY_SUBITEM.href);
  const span = getByTestId('navbarsubitem-span');
  expect(span).toHaveClass(`has-text-${DUMMY_SUBITEM.accent}`);
});

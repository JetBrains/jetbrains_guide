/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';

import Navbar, { NavbarProps } from './Navbar';
import { DUMMY_LINK } from './NavbarLink.spec';
import { DUMMY_BUTTON } from './NavbarButton.spec';
import { DUMMY_BRAND } from './NavbarBrand.spec';
import { DUMMY_MENUITEM } from './NavbarMenuItem.spec';
import { DUMMY_SUBITEM } from './NavbarSubItem.spec';
import { DUMMY_START } from './NavbarStart.spec';
import { DUMMY_END } from './NavbarEnd.spec';
import { DUMMY_SUBMENU } from './NavbarSubMenu.spec';

export const DUMMY_NAVBAR: NavbarProps = {
  brand: DUMMY_BRAND,
  start: DUMMY_START,
  end: DUMMY_END,
};

test('Navbar', () => {
  const { getByTestId } = render(<Navbar {...DUMMY_NAVBAR} />);

  // ####  BRAND
  // const github = getByTestId('navbarbrand-github');
  // expect(github).toHaveAttribute('href', DUMMY_NAVBAR.brand.githubUrl);
  //
  // const twitter = getByTestId('navbarbrand-twitter');
  // expect(twitter).toHaveStyle(`color: ${DUMMY_NAVBAR.brand.twitterUrl}`);

  // #### START
  // #### MENUITEM
  const menuitem = getByTestId('navbarmenuitem-link');
  expect(menuitem).toHaveClass(`bd-navbar-item-${DUMMY_MENUITEM.cssClass}`);
  expect(menuitem).toHaveAttribute('href', DUMMY_MENUITEM.href);

  // #### SUBMENU
  const label = getByTestId('navbarsubmenu-label');
  expect(label).toHaveTextContent(DUMMY_SUBMENU.label);
  const submenu = getByTestId('navbarsubitem-link');
  expect(submenu).toHaveAttribute('href', DUMMY_SUBITEM.href);
  const submenuSpan = getByTestId('navbarsubitem-span');
  expect(submenuSpan).toHaveClass(`has-text-${DUMMY_SUBITEM.accent}`);

  // #### END
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
});

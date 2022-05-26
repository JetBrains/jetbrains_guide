/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';

import NavbarSubMenu, { NavbarSubMenuProps } from './NavbarSubMenu';
import { DUMMY_SUBITEM } from './NavbarSubItem.test';

export const DUMMY_SUBMENU: NavbarSubMenuProps = {
  label: 'label1',
  items: [DUMMY_SUBITEM],
};

test('NavbarSubMenu', () => {
  const { getByTestId } = render(<NavbarSubMenu {...DUMMY_SUBMENU} />);

  // The menu label
  const label = getByTestId('navbarsubmenu-label');
  expect(label).toHaveTextContent(DUMMY_SUBMENU.label);

  // One of the items
  const link = getByTestId('navbarsubitem-link');
  expect(link).toHaveAttribute('href', DUMMY_SUBITEM.href);

  const span = getByTestId('navbarsubitem-span');
  expect(span).toHaveClass(`has-text-${DUMMY_SUBITEM.accent}`);

  const i = getByTestId('navbarsubitem-i');
  expect(i).toHaveClass(`fa-${DUMMY_SUBITEM.icon}`);

  const strong = getByTestId('navbarsubitem-strong');
  expect(strong).toHaveTextContent(DUMMY_SUBITEM.label as string);

  const span2 = getByTestId('navbarsubitem-span2');
  const description = DUMMY_SUBITEM.description as string;
  expect(span2).toHaveTextContent(description);
});

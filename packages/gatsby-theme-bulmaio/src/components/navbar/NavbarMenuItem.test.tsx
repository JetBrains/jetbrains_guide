/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';

import NavbarMenuItem, { NavbarMenuItemProps } from './NavbarMenuItem';

export const DUMMY_MENUITEM: NavbarMenuItemProps = {
  accent: 'accent1',
  cssClass: 'cssClass1',
  href: '/href1',
  label: 'label1',
  icon: 'icon1',
  items: [],
};

test('NavbarMenuItem', () => {
  const { getByTestId } = render(<NavbarMenuItem {...DUMMY_MENUITEM} />);

  // Link
  const link = getByTestId('navbarmenuitem-link');
  expect(link).toHaveClass(`bd-navbar-item-${DUMMY_MENUITEM.cssClass}`);
  expect(link).toHaveAttribute('href', DUMMY_MENUITEM.href);

  // Span
  const span = getByTestId('navbarmenuitem-span');
  expect(span).toHaveClass(`has-text-${DUMMY_MENUITEM.accent}`);

  // i
  const i = getByTestId('navbarmenuitem-i');
  expect(i).toHaveClass(`fa-${DUMMY_MENUITEM.icon}`);

  // label
  const label = getByTestId('navbarmenuitem-label');
  expect(label).toHaveTextContent(DUMMY_MENUITEM.label);
});

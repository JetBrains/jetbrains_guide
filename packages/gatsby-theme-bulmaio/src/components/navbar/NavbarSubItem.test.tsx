/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';

import NavbarSubItem, { NavbarSubItemProps } from './NavbarSubItem';

export const DUMMY_SUBITEM: NavbarSubItemProps = {
  href: '/href1',
  label: 'label1',
  icon: 'icon1',
  accent: 'accent1',
  description: 'description1',
};

test('NavbarSubItem', () => {
  const { getByTestId } = render(<NavbarSubItem {...DUMMY_SUBITEM} />);

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

import React from 'react';
import { render } from '@testing-library/react';

import NavbarLink, { NavbarLinkProps } from './NavbarLink';

export const DUMMY_LINK: NavbarLinkProps = {
  href: '/href1',
  color: 'color1',
  icon: 'icon1',
};

test('NavbarLink', () => {
  const { getByTestId } = render(<NavbarLink {...DUMMY_LINK} />);

  // href
  const a = getByTestId('navbarlink-a');
  expect(a).toHaveAttribute('href', DUMMY_LINK.href);

  // color
  const span = getByTestId('navbarlink-span');
  expect(span).toHaveStyle(`color: ${DUMMY_LINK.color}`);

  // icon
  const i = getByTestId('navbarlink-i');
  expect(i).toHaveClass(`fa-${DUMMY_LINK.icon}`);
});

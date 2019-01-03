import { mount } from 'enzyme';
import * as React from 'react';
import { MORE_SUBMENU } from './constants';

import NavbarSubMenu from './NavbarSubMenu';

it('renders the default NavbarSubMenu', () => {
  const wrapper = mount(<NavbarSubMenu {...MORE_SUBMENU} />);

  const a = wrapper.find('a.navbar-item');
  expect(a.prop('href')).toEqual('/about');
});

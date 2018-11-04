import * as React from 'react';
import { mount } from 'enzyme';

import NavbarSubMenu from './NavbarSubMenu';
import { MORE_SUBMENU } from './constants';

it('renders the default NavbarSubMenu', () => {
  const wrapper = mount(
    <NavbarSubMenu {...MORE_SUBMENU}/>);

  const a = wrapper.find('a.navbar-item');
  expect(a.prop('href')).toEqual('href1');
});

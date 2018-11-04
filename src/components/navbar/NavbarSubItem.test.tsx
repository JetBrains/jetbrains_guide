import * as React from 'react';
import { shallow } from 'enzyme';

import NavbarSubItem from './NavbarSubItem';
import { MORE_SUBMENU } from './constants';

it('renders the default NavbarSubItem', () => {
  const wrapper = shallow(
    <NavbarSubItem {...MORE_SUBMENU.items[0]}/>);

  const a = wrapper.find('a');
  expect(a.hasClass('navbar-item bd-navbar-item-class1'));
  const span1 = wrapper.find('span.icon');
  expect(span1.hasClass('has-text-accent1'));
  const i = span1.find('i');
  expect(i.hasClass('fa-icon1'));
  const description = wrapper.find('span.bio-dropdown-description');
  expect(description.text()).toEqual('description1');
});

import { mount } from 'enzyme';
import * as React from 'react';
import { START } from './constants';
import NavbarStart from './NavbarStart';

it('renders the default NavbarStart', () => {
  const wrapper = mount(<NavbarStart items={START.items} />);

  const a = wrapper.find('GatsbyLink.navbar-item');
  expect(a.length).toEqual(5);
});

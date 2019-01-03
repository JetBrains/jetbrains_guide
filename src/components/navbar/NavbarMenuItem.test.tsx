import { shallow } from 'enzyme';
import * as React from 'react';
import { MENUITEM1 } from './constants';

import NavbarMenuItem from './NavbarMenuItem';

it('renders the default NavbarMenuItem', () => {
  const wrapper = shallow(<NavbarMenuItem {...MENUITEM1} />);

  const a = wrapper.find('GatsbyLink');
  expect(a.hasClass('navbar-item'));
  const span1 = wrapper.find('span.icon');
  expect(span1.hasClass('has-text-primary'));
  const i = span1.find('i');
  expect(i.hasClass('fa-book'));
  const span2 = wrapper.find('span.bulmaio-menu-label');
  expect(span2.text()).toEqual('Learn');
});

it('renders the narrow NavbarMenuItem', () => {
  const wrapper = shallow(
    <NavbarMenuItem accent="accent1" href="href1" css_class="css_class1" label="label1" icon="icon1" label_narrow={true} />
  );

  const a = wrapper.find('GatsbyLink');
  expect(a.hasClass('navbar-item'));
  const span1 = wrapper.find('span.icon');
  expect(span1.hasClass('has-text-accent1'));
  const i = span1.find('i');
  expect(i.hasClass('fa-icon1'));
  const span2 = wrapper.find('span.bulmaio-menu-label');
  expect(span2.text()).toEqual('label1');
});

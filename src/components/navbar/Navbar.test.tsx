import { mount } from 'enzyme';
import * as React from 'react';
import { NAVBAR } from './constants';
import Navbar from './Navbar';

it('renders the default Navbar', () => {
  const wrapper = mount(<Navbar {...NAVBAR} />);

  const a = wrapper.find('GatsbyLink.navbar-item');
  expect(a.length).toEqual(8);
});

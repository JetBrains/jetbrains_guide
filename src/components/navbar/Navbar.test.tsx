import * as React from 'react';
import { mount } from 'enzyme';
import { NAVBAR } from './constants';
import Navbar from './Navbar';

it('renders the default Navbar', () => {
  const wrapper = mount(<Navbar {...NAVBAR}/>);

  const a = wrapper.find('a.navbar-item');
  expect(a.length).toEqual(7);
});

import { mount } from 'enzyme';
import * as React from 'react';
import { END } from './constants';

import NavbarEnd from './NavbarEnd';

describe('NavbarEnd', () => {
  const wrapper = mount(<NavbarEnd {...END} />);

  it('renders the buttons', () => {
    const buttons = wrapper.find('p.control');
    expect(buttons.length).toEqual(1);
  });

  it('renders the buttons', () => {
    const links = wrapper.find('a.navbar-item');
    expect(links.length).toEqual(2);
  });
});

import * as React from 'react';
import { mount } from 'enzyme';

import NavbarEnd from './NavbarEnd';
import { END } from './constants';

describe('NavbarEnd', () => {
  const wrapper = mount(<NavbarEnd {...END}/>);

  it('renders the buttons', () => {
    const buttons = wrapper.find('p.control');
    expect(buttons.length).toEqual(2);
  });

  it('renders the buttons', () => {
    const links = wrapper.find('a.navbar-item');
    expect(links.length).toEqual(2);
  });

});

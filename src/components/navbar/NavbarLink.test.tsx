import { shallow } from 'enzyme';
import * as React from 'react';

import NavbarLink from './NavbarLink';

describe('NavbarLink', () => {
  const wrapper = shallow(<NavbarLink href="href1" color="color1" icon="icon1" />);

  it('renders the link', () => {
    const link = wrapper.find('a');
    expect(link.prop('href')).toBe('href1');
  });

  it('renders the icon', () => {
    const link = wrapper.find('span');
    const style = link.prop('style');
    expect(style).toEqual({ color: '#color1' });

    const icon = wrapper.find('i');
    expect(icon.hasClass('fa-icon1'));
  });
});

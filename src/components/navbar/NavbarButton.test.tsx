import { shallow } from 'enzyme';
import * as React from 'react';

import NavbarButton from './NavbarButton';

describe('NavbarButton', () => {
  const wrapper = shallow(<NavbarButton accent="accent1" href="href1" label="label1" />);

  it('renders the button', () => {
    const a = wrapper.find('a');
    expect(a.prop('href')).toEqual('href1');
    expect(a.hasClass('button is-accent1'));
    const strong = wrapper.find('strong');
    expect(strong.text()).toEqual('label1');
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';

import NavbarBrand from './NavbarBrand';
import { BRAND } from './constants';

describe('NavbarBrand', () => {
  const wrapper = shallow(<NavbarBrand {...BRAND} />);

  it('renders the logo', () => {
    const logo = wrapper.find('a.bio-navbar-brand');
    expect(logo.prop('href'))
      .toBe('/homepage');
  });

  it('renders the github button', () => {
    const logo = wrapper.find('a.bio-navbar-brand-github');
    expect(logo.prop('href'))
      .toBe('/github');
  });

  it('renders the twitter button', () => {
    const logo = wrapper.find('a.bio-navbar-brand-twitter');
    expect(logo.prop('href'))
      .toBe('/twitter');
  });

});

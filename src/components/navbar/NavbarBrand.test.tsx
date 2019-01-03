import { shallow } from 'enzyme';
import * as React from 'react';
import { BRAND } from './constants';

import NavbarBrand from './NavbarBrand';

describe('NavbarBrand', () => {
    const wrapper = shallow(<NavbarBrand {...BRAND} />);

    it('renders the logo', () => {
        const logo = wrapper.find('GatsbyLink.bio-navbar-brand');
        // expect(wrapper.debug()).toEqual(3);
        expect(logo.prop('to'))
            .toBe('/');
    });

    it('renders the github button', () => {
        const logo = wrapper.find('GatsbyLink.bio-navbar-brand-github');
        expect(logo.prop('to'))
            .toBe('/github');
    });

    it('renders the twitter button', () => {
        const logo = wrapper.find('GatsbyLink.bio-navbar-brand-twitter');
        expect(logo.prop('to'))
            .toBe('/twitter');
    });

});

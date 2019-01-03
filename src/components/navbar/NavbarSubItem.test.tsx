import { shallow } from 'enzyme';
import * as React from 'react';
import { MORE_SUBMENU } from './constants';

import NavbarSubItem from './NavbarSubItem';

it('renders the default NavbarSubItem', () => {
    const wrapper = shallow(
        <NavbarSubItem {...MORE_SUBMENU.items[0]}/>);

    const a = wrapper.find('GatsbyLink');
    expect(a.hasClass('navbar-item bd-navbar-item-class'));
    const span1 = wrapper.find('span.icon');
    expect(span1.hasClass('has-text-accent1'));
    const i = span1.find('i');
    expect(i.hasClass('fa-icon1'));
    const description = wrapper.find('span.bio-dropdown-description');
    expect(description.text()).toEqual(MORE_SUBMENU.items[0].description);
});

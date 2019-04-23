import {shallow} from "enzyme";
import React from "react";
import Heading from "./Heading";

it('renders the heading', () => {
    const wrapper = shallow(<Heading recipient={'World'}/>);
    expect(wrapper.find('h1').text()).toBe('Hello World');
});

it('renders the default heading', () => {
   const wrapper = shallow(<Heading/>);
   expect(wrapper.find('h1').text())
       .toBe('Hello React');
});
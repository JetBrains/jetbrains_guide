import {shallow} from "enzyme";
import Counter from "./Counter";
import * as React from "react";

it('should render a counter', () => {
    const wrapper = shallow(<Counter/>);
    expect(wrapper.find('.counter label').text())
        .toBe('Count');
});

it('should render a counter with custom label', () => {
    const wrapper = shallow(<Counter label={'Current'}/>);
    expect(wrapper.find('.counter label').text())
        .toBe('Current');
});

it('should default start at zero', () => {
    const wrapper = shallow(<Counter label={'Current'}/>);
    expect(wrapper.find('.counter span').text()).toBe('0');
});

it('should custom start at another value', () => {
    const wrapper = shallow(<Counter label={'Current'} start={10}/>);
    expect(wrapper.find('.counter span').text()).toBe('10');
});
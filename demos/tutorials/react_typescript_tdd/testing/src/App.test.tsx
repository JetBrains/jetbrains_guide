import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
    const actual = 1;
    const expected = 1;
    expect(actual).toBe(expected);
});

it('renders the heading', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('h1').text()).toBe('Hello React');
});

it('renders the paragraph', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('p').text()).toBe('Nice TDD');
});
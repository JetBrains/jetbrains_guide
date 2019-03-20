import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the heading', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('h1').text()).toBe('Hello REACT');
});

it('renders the paragraph', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('p').text()).toBe('Nice TDD');
});

it('generates a label', () => {
    const a = new App({});
    expect(a.label('React')).toEqual('Hello REACT');
});
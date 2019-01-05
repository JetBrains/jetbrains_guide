import { mount } from 'enzyme';
import * as React from 'react';
import SidebarSteps, { IStep } from './SidebarSteps';

const sampleSteps: IStep[] = [
  {
    label: 'Some Label 1',
    target: '/some/step1/'
  },
  {
    label: 'Some Label 2',
    target: '/some/step2/'
  }
];

describe('SidebarSteps', () => {
  it('renders the steps', () => {
    const wrapper = mount(<SidebarSteps steps={sampleSteps} currentSlug={sampleSteps[1].target} />);
    const span1 = wrapper.find('span.is-primary');
    expect(span1.text()).toEqual('1');
    const span2 = wrapper.find('span.is-info');
    expect(span2.text()).toEqual('2');
  });
});

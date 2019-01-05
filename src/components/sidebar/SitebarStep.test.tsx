import { shallow } from 'enzyme';
import * as React from 'react';
import SidebarStep, { ISidebarStepProps } from './SidebarStep';

const sampleStep: ISidebarStepProps = {
  label: 'Some Label',
  target: 'Some Target',
  marker: 22,
  isActive: true
};

describe('SidebarStep', () => {
  it('renders the step when active', () => {
    const wrapper = shallow(<SidebarStep {...sampleStep} />);
    const span = wrapper.find('span');
    expect(span.hasClass('is-info')).toBeTruthy();
  });

  it('renders the step when inactive', () => {
    const wrapper = shallow(<SidebarStep {...sampleStep} isActive={false} />);
    const span = wrapper.find('span');
    expect(span.hasClass('is-primary')).toBeTruthy();
  });
});

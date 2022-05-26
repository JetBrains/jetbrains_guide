/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';

import SidebarSteps, { SidebarStepsProps, Step } from './SidebarSteps';

const DUMMY_STEP1: Step = {
  label: 'label1',
  href: '/href1',
};

export const DUMMY_STEPS: SidebarStepsProps = {
  steps: [DUMMY_STEP1],
};

test('SidebarSteps', () => {
  const { getByText } = render(<SidebarSteps {...DUMMY_STEPS} />);
  expect(getByText(DUMMY_STEP1.label)).toBeTruthy();
});

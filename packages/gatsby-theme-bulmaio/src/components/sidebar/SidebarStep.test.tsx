/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';

import SidebarStep, { SidebarStepProps } from './SidebarStep';

export const DUMMY_STEP: SidebarStepProps = {
  label: 'label1',
  target: 'target1',
  marker: 9,
  isActive: true,
};

test('SidebarStep', () => {
  const { label, target, marker } = DUMMY_STEP;
  const { getByText, getByTestId } = render(<SidebarStep {...DUMMY_STEP} />);
  expect(getByText(label)).toBeTruthy();
  expect(getByText(marker.toString())).toHaveClass('is-info');
  expect(getByTestId('ss-link')).toHaveAttribute('href', target);
});

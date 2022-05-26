/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';

import BottomNav, { BottomNavProps } from './BottomNav';

export const DUMMY_PROPS: BottomNavProps = {
  previous: { slug: 'slug1', label: 'label1' },
  next: { slug: 'slug3', label: 'label3' },
  playlistLabel: 'playlistLabel1',
};

test('BottomNav', () => {
  const { getByText } = render(<BottomNav {...DUMMY_PROPS} />);
  expect(getByText('label1')).toBeTruthy();
  expect(getByText('label3')).toBeTruthy();
});

/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { ResourceCardDate, ResourceCardDateProps } from './ResourceCardDate';

export const DUMMY_RCD: ResourceCardDateProps = {
  date: 'date1',
};

test('ResourceCardDate', () => {
  const { getByText } = render(<ResourceCardDate {...DUMMY_RCD} />);
  const date = getByText(DUMMY_RCD.date as string);
  expect(date).toBeTruthy();
});

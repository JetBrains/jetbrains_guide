import React from 'react';
import { render } from '@testing-library/react';

import Sidebar from './Sidebar';

test('Sidebar', () => {
  const children = <div>children1</div>;
  const { getByText } = render(<Sidebar children={children} />);
  expect(getByText('children1')).toBeTruthy();
});

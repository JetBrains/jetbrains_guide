import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Sidebar from './Sidebar';

test('Sidebar', () => {
  const children = <div>children1</div>;
  const { getByText } = render(<Sidebar children={children}/>);
  expect(getByText('children1')).toBeTruthy();
});

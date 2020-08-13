import React from 'react';
import { render } from '@testing-library/react';

import { Action, getOS } from './Action';

test('Action Short Form', () => {
  const { getByText } = render(<Action id="FindInPath" />);
  const node = getByText('Cmd+Shift+F');
  expect(node).toBeTruthy();
  expect(node.getAttribute('title')).toEqual('Find In Path');
});

test('Action Long Form', () => {
  const { getByText } = render(<Action id="FindInPath" longForm={true} />);
  const node = getByText('Find In Path (Cmd+Shift+F)');
  expect(node).toBeTruthy();
  expect(node.getAttribute('title')).toBeNull();
});

test('getOS', () => {
  const result = getOS();
  expect(result).toEqual('mac');
});

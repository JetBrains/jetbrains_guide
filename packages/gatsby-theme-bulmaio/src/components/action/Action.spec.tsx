import React from 'react';
import { render } from '@testing-library/react';

import Action, {getOS} from './Action';

test('Action', () => {
    const { getByText } = render(<Action />);
    expect(getByText('Linux')).toBeTruthy();
});

test('getOS', () => {
   const result = getOS();
   expect(result).toEqual("Linux")
});
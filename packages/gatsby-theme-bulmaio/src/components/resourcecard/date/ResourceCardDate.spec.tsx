import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { ResourceCardDate, ResourceCardDateProps } from './ResourceCardDate';

afterEach(cleanup);

export const DUMMY_RCD: ResourceCardDateProps = {
  date: 'date1'
};

test('ResourceCardDate', () => {
    const { getByText } = render(<ResourceCardDate {...DUMMY_RCD}/>);
    const date = getByText(DUMMY_RCD.date as string);
    expect(date).toBeTruthy();
});

import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import { ResourceCardMedia, ResourceCardMediaProps } from './ResourceCardMedia';

afterEach(cleanup);

export const DUMMY_RCM: ResourceCardMediaProps = {
  href: '/href1',
  title: 'title1'
};

export const DUMMY_RCM2: ResourceCardMediaProps = {
  href: '/href1',
  title: 'title1',
  subtitle: 'subtitle1'
};

describe('ResourceCardMedia', () => {
  it('renders with no subtitle', () => {
    const { getByText, queryByTestId } = render(<ResourceCardMedia {...DUMMY_RCM}/>);
    expect(queryByTestId('rcm-href')).toHaveAttribute('href', DUMMY_RCM.href);
    expect(getByText(DUMMY_RCM.title)).toBeTruthy();
    expect(queryByTestId('rcm-subtitle')).toBeNull();
  });

  it('renders with subtitle', () => {
    const { getByText } = render(<ResourceCardMedia {...DUMMY_RCM2}/>);
    if (DUMMY_RCM2.subtitle) {
      expect(getByText(DUMMY_RCM2.subtitle)).toBeTruthy();
    }
  });

});

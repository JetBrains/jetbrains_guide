import React from 'react';
import { render } from '@testing-library/react';

import SubsectionProduct, { SubsectionProductProps } from './SubsectionProduct';

export const DUMMY_STE: SubsectionProductProps = {
  title: 'title1',
  subtitle: 'subtitle1',
  href: 'href1',
  logo: 'logo1'
};

test('SubsectionProduct', () => {
  const { getByText, getByTestId } = render(<SubsectionProduct {...DUMMY_STE}/>);
  expect(getByTestId('ste-href')).toHaveAttribute('href', 'href1');
  expect(getByTestId('ste-logo')).toHaveAttribute('src', 'logo1');
  expect(getByText(DUMMY_STE.title)).toBeTruthy();
  if (DUMMY_STE.subtitle) expect(getByText(DUMMY_STE.subtitle)).toBeTruthy();
});

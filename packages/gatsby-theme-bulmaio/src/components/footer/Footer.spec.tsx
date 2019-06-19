import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Footer, { FooterProps } from './Footer';

export const DUMMY_FOOTER: FooterProps = {
  copyright: 'copyright1'
};

test('Footer', () => {
  const { getByText } = render(<Footer {...DUMMY_FOOTER}/>);
  const copyright = getByText(DUMMY_FOOTER.copyright);
  expect(copyright).toBeTruthy();
});

import React from 'react';
import { render } from '@testing-library/react';

import NavbarBrand, { NavbarBrandProps } from './NavbarBrand';

export const DUMMY_BRAND: NavbarBrandProps = {
  githubUrl: 'githubUrl1',
  twitterUrl: 'twitterUrl1'
};

test('NavbarBrand', () => {
    const { getByTestId } = render(<NavbarBrand {...DUMMY_BRAND}/>);

    const github = getByTestId('navbarbrand-github');
    expect(github).toHaveAttribute('href', DUMMY_BRAND.githubUrl);

    const twitter = getByTestId('navbarbrand-twitter');
    expect(twitter).toHaveStyle(`color: ${DUMMY_BRAND.twitterUrl}`);
});

/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';

import MasterLayout, { MasterLayoutProps } from './MasterLayout';
import { DUMMY_NAVBAR } from '../navbar/Navbar.spec';
import { DUMMY_FOOTER } from '../footer/Footer.test';
import { DUMMY_MENUITEM } from '../navbar/NavbarMenuItem.spec';
import { DUMMY_SUBITEM } from '../navbar/NavbarSubItem.spec';
import { DUMMY_LINK } from '../navbar/NavbarLink.spec';

test('MasterLayout', () => {
  const children: React.ReactNode = <div>children1</div>;
  const props: MasterLayoutProps = {
    helmet: {
      siteTitle: 'siteTitle1',
    },
    navbar: DUMMY_NAVBAR,
    page: {
      pageTitle: 'pageTitle1',
      // twitterCardConfig: {
      //     site: {
      //         siteName: "title1",
      //         creator: "creator1"
      //     }
      //     description: "description1",
      //     imageUrl: "imageUrl1",
      // },
      children,
    },
    footer: DUMMY_FOOTER,
  };
  const { getByText, getByTestId } = render(<MasterLayout {...props} />);

  // Now test all those things
  // Helmet stuff doesn't seem to work :(
  // expect(getByText('pageTitle1 - siteTitle1')).toBeTruthy();

  // #####  NAVBAR
  // Brand
  const github = getByTestId('navbarbrand-github');
  expect(github).toHaveAttribute('href', props.navbar.brand.githubUrl);

  const twitter = getByTestId('navbarbrand-twitter');
  expect(twitter).toHaveStyle(`color: ${props.navbar.brand.twitterUrl}`);

  // Start
  const menuitem = getByTestId('navbarmenuitem-link');
  expect(menuitem).toHaveClass(`bd-navbar-item-${DUMMY_MENUITEM.cssClass}`);
  expect(menuitem).toHaveAttribute('href', DUMMY_MENUITEM.href);

  // #### SUBMENU
  const submenu = getByTestId('navbarsubitem-link');
  expect(submenu).toHaveAttribute('href', DUMMY_SUBITEM.href);
  const submenuSpan = getByTestId('navbarsubitem-span');
  expect(submenuSpan).toHaveClass(`has-text-${DUMMY_SUBITEM.accent}`);

  // End
  // href
  const a = getByTestId('navbarlink-a');
  expect(a).toHaveAttribute('href', DUMMY_LINK.href);

  // color
  const span = getByTestId('navbarlink-span');
  expect(span).toHaveStyle(`color: ${DUMMY_LINK.color}`);

  // icon
  const i = getByTestId('navbarlink-i');
  expect(i).toHaveClass(`fa-${DUMMY_LINK.icon}`);

  // #### FOOTER
  const copyright = getByText(props.footer.copyright);
  expect(copyright).toBeTruthy();
});

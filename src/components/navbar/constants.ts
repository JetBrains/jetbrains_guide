import { INavbarSubMenuProps } from './NavbarSubMenu';
import { INavbarMenuItemProps } from './NavbarMenuItem';
import { INavbarStartProps } from './NavbarStart';
import { INavbarEndProps } from './NavbarEnd';
import { INavbarBrandProps } from './NavbarBrand';
import { INavbarProps } from './Navbar';

export const HOMEPAGE_URL = '/homepage';
export const LOGO_ALT = 'Logo';
export const GITHUB_URL = '/github';
export const TWITTER_URL = '/twitter';

export const BRAND: INavbarBrandProps = {};

export const LINKS = [
  {
    color: 'light',
    href: 'https://github.com/jetbrains/pycharm_guide',
    icon: 'github'
  },
  {
    color: '55acee',
    href: 'https://twitter.com/pycharm',
    icon: 'twitter'
  }
];

export const BUTTONS = [
  {
    accent: 'light',
    href: 'https://www.jetbrains.com/pycharm/download/',
    label: 'Get PyCharm'
  }
];

export const MENUITEM1: INavbarMenuItemProps = {
  accent: 'primary',
  href: 'href1',
  css_class: 'documentation',
  label: 'Learn',
  icon: 'book'
};

export const MENUITEM2: INavbarMenuItemProps = {
  accent: 'rss',
  href: 'href2',
  css_class: 'blog',
  label: 'News',
  icon: 'rss'
};

export const MORE_SUBMENU: INavbarSubMenuProps = {
  label: 'More',
  href: '/more',
  items: [
    {
      label: 'About the Guide',
      href: 'about',
      accent: 'success',
      icon: 'rocket',
      description: 'The PyCharm Guide is a community-driven compendium of PyCharm learning resources.'
    }
  ]
};

export const START: INavbarStartProps = { items: [MENUITEM1, MENUITEM2, MORE_SUBMENU] };
export const END: INavbarEndProps = { links: LINKS, buttons: BUTTONS };
export const NAVBAR: INavbarProps = { brand: BRAND, start: START, end: END };

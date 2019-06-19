/*

The theme defines a default logo node, driven by a
local image. But the site using the theme can use the
layering in Gatsby themes to overwrite it via a
src/components/logo/Logo.tsx file.

 */

import React from 'react';
// @ts-ignore
import logo from './logo.png';

const Logo: React.ReactNode = <img src={logo} className="bio-navbar-logo-image" alt={`Logo`} height="28"/>;

export default Logo;

/*

The theme defines a default favicon node, driven by a
local image. But the site using the theme can use the
layering in Gatsby themes to overwrite it via a
src/components/favicon/Favicon.tsx file.

 */

import React from "react"
// @ts-ignore
import favicon from "./favicon.ico"

const Favicon: React.ReactNode = <link rel="shortcut icon" href={favicon} />

export default Favicon

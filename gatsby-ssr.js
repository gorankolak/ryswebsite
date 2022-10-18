// gatsby-ssr.js

import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="KaftanSerifTrial-Regular"
      rel="preload"
      href="/fonts/KaftanSerifTrial-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ])
}

import React from "react"

import Header from "../header/header"
import Footer from "../footer/footer"
import Midsection from "../midsection/midsection"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <div className="main-wrapper">
        <Header />

        <main class="main">{children}</main>
      </div>
      <Midsection />
      <Footer />
    </div>
  )
}

export default Layout

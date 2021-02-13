import React from "react"

import Header from "../header/header"
import Footer from "../footer/footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />

      <div className="main-wrapper">
        <main>{children}</main>

        <Footer />
      </div>
    </div>
  )
}

export default Layout

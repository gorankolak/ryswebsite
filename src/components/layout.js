import React from "react"
import { Link } from "gatsby"

import logo from "../../content/assets/dyt-logo.png"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  // let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <div className="logo-wrapper">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        {/* {header} */}
      </header>
      <main>{children}</main>
      <footer>
        <p>Doodle Your Toys, 2013. - {new Date().getFullYear()}.</p>
        <p>
          Created by <a href="https://github.com/gorankolak">GK</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout

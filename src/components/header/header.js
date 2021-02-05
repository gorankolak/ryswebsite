import React from "react"
import { Link } from "gatsby"

import logo from "../../../content/assets/dyt-logo.png"
import styles from "./header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            {/* TO-DO: Later transform to graphQL link usage */}
            <Link activeClassName={styles.active} to="/ordering/">
              Ordering
            </Link>
          </li>
          <li>
            <Link activeClassName={styles.active} to="/pricing/">
              Pricing
            </Link>
          </li>
          <li>
            <Link activeClassName={styles.active} to="/about-us/">
              About
            </Link>
          </li>
          <li>
            <Link activeClassName={styles.active} to="/blog/">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

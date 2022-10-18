import React from "react"
import { Link } from "gatsby"

import logo from "../../../content/assets/logo_black.png"
import styles from "./header.module.css"

const Header = () => {
  return (
    <header class="header">
      <div class="logo-wrapper">
        <Link to="/">
          <img class="logo" src={logo} alt="Logo" />
        </Link>
      </div>

      <nav class="nav">
        <ul>
          <li>
            {/* TO-DO: Later transform to graphQL link usage */}
            <Link activeClassName={styles.active} to="/our-story/">
              our story
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

import React from "react"
import { Link } from "gatsby"
import logo from "../../../content/assets/dyt-logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            {/* TO-DO: Later transform to graphQL link usage */}
            <Link to="/ordering/">Ordering</Link>
          </li>
          <li>
            <Link to="/pricing/">Pricing</Link>
          </li>
          <li>
            <Link to="/about-us/">About Us</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

import React from "react"
import CookieConsent from "react-cookie-consent"

import styles from "./footer.module.css"
// import SVGfooter1 from "../../../content/assets/svg/footersvg_1.svg"

const Footer = () => {
  return (
    <footer id="contact" class="footer" className={styles.footer}>
      {/* <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
      >
        This site uses cookies to offer you a better browsing experience.
      </CookieConsent> */}
      {/* <SVGfooter1 class="svgfooter1 svgs" /> */}
      <div className="footer-left">
        <p class="footer-subtitle">contact</p>
        <p class="footer-title">
          <a href="mailto:info@raveyoursoul.com">info@raveyoursoul.com</a>
        </p>
        <p class="footer-subtitle">demos</p>
        <p class="footer-title">
          <a href="mailto:demo@raveyoursoul.com">demo@raveyoursoul.com</a>
        </p>
      </div>

      <div className="footer-right">
        {/* <p>~</p> */}
        <p>all content © {new Date().getFullYear()}. rave your soul</p>
      </div>
    </footer>
  )
}

export default Footer

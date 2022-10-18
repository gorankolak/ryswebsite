import React from "react"
import CookieConsent from "react-cookie-consent"

import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer class="footer" className={styles.footer}>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
      >
        This site uses cookies to offer you a better browsing experience.
      </CookieConsent>

      <div className="footer-left">
        <p>
          contact ≈{" "}
          <a href="mailto:info@raveyoursoul.com">info@raveyoursoul.com</a>
        </p>
        <p>
          demos ≈{" "}
          <a href="mailto:demo@raveyoursoul.com">demo@raveyoursoul.com</a>
        </p>
      </div>

      <div className="footer-right">
        <p>~</p>
        <p>all content © {new Date().getFullYear()}. rave your soul</p>
      </div>
    </footer>
  )
}

export default Footer

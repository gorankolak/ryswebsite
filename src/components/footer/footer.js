import React from "react"
import CookieConsent from "react-cookie-consent"

import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
      >
        This site uses cookies to offer you a better browsing experience.
      </CookieConsent>
      <p>
        All images and content © 2013. - {new Date().getFullYear()}. Doodle Your
        Toys. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer

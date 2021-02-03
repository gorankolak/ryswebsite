import React from "react"
import CookieConsent from "react-cookie-consent"

const Footer = () => {
  return (
    <footer>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
      >
        This site uses cookies ...
      </CookieConsent>
      <p>
        All images and content © 2013. - {new Date().getFullYear()}. Doodle Your
        Toys. All rights reserved. Website developed by{" "}
        <a href="https://github.com/gorankolak">GK</a>
      </p>
    </footer>
  )
}

export default Footer

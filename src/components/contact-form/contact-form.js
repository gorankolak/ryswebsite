import React, { useState } from "react"
import axios from "axios"

import styles from "./contact-form.module.css"

const ContactForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/2f82ac65-d09a-461a-99d6-8606eeac95a6",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <div className={styles.contactForm}>
      <p>
        Send us your drawings, artworks, cartoons, sketches, or any kind of
        graphic design.
      </p>
      <h3>Get your softie :)</h3>
      <form
        acceptCharset="UTF-8"
        onSubmit={handleOnSubmit}
        encType="multipart/form-data"
      >
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="photo">Upload photo</label>
        <input type="file" name="photo"></input>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="" cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
      </form>
      <p>
        Our email: <br /> mail@doodleyourtoys.com
      </p>
    </div>
  )
}

export default ContactForm

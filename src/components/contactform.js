import React, { useState } from "react"
import axios from "axios"

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
    <div>
      <h3>Getform.io Gatsby Form Example</h3>
      <form
        acceptCharset="UTF-8"
        onSubmit={handleOnSubmit}
        encType="multipart/form-data"
      >
        <input type="email" name="email" placeholder="Your Email" />
        <input type="text" name="name" placeholder="Your Name" />
        <input type="file" name="photo"></input>
        <input type="text" name="message" placeholder="Your Message" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ContactForm

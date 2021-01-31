import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const OrderingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ordering" />
      <h1>Ordering</h1>
      <p>
        If you want to place an order of a plush toy based on your child’s
        drawing, all you need for a start is to send us an email to:{" "}
        <a href="mailto:mail@doodleyourtoys.com">mail@doodleyourtoys.com</a>
      </p>
      <p>
        You can also use our website’s contact form, or you can just leave a
        message on our{" "}
        <a href="https://www.facebook.com/DoodleYourToys">Facebook</a> or{" "}
        <a href="https://www.instagram.com/doodleyourtoys/">Instagram</a> page.
      </p>
      <p>
        Afterwards, to start processing your order, we will need the following:
      </p>
      <ul>
        <li>
          <ul>
            <li>
              Photo of the drawing - scanned or captured (in any image format,
              e.g. JPEG, PNG, BMP, GIF, PDF, PSD) - mail us, or upload on our
              Facebook page.
            </li>
            <li>
              Chosen size of the toy  - size details are on{" "}
              <a href="http://www.doodleyourtoys.com/pricing/">Pricing</a> page.
            </li>
          </ul>
        </li>
      </ul>
      <p>
        When we receive your drawing, we'll send you an invoice so you can make
        a payment using a PayPal service. After your payment is processed, we
        will begin with the development of your custom toy. As soon as the
        process of drafting is complete, we will send you a photo of the
        finished toy so you can see how it looks like, and then your toy will be
        packed and sent to you. We ship worldwide!
      </p>
      <p>
        These are some basic information about ordering and toy making process.
        If you have any special request regarding your custom toy, or if you
        want us to pay attention to any specific detail (size, color, materials,
        etc.), be sure you let us know about that, so we could make a plush toy
        that is fully in line with your expectations.
      </p>
      <p>
        Of course, during the entire period of production and delivery process,
        you can contact us with any additional question or to inform yourself
        about any stage of the development. Besides email, for this purpose you
        can also use the opportunity to comment and send messages on our
        Facebook or Instagram page.
      </p>
    </Layout>
  )
}

export default OrderingPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

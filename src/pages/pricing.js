import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PricingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Pricing" />
      <h1>Pricing</h1>

      <p>
        All of our toys are custom handmade as unique products based on drawings
        and sketches received from you.
      </p>
      <p>
        Most often, our stuffed toys are created in two main sizes. Depending on
        the size in which you want your plush toy to be made, the price is
        formed as follows:
      </p>
      <ul>
        <li>
          Standard size toy (approx. 11-13” / 28-33cm height or width)
          <br />
          $75 / €65 / £62  (shipping costs: $15 / €13 / £12)
        </li>
        <li>
          Large size toy (approx. 15-16” / 38-40cm height or width)
          <br />
          $90 / €78 / £74  (shipping costs: $15 / €13 / £12)
        </li>
      </ul>
      <p>We ship worldwide!</p>
      <p>
        If you have any special request regarding a size or some other
        requirements, please mention it when you send your message on our
        Facebook and Instagram page or email to us.
      </p>
    </Layout>
  )
}

export default PricingPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
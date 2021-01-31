import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <h1>Meet the team</h1>
      <p>
        If you want to turn your kid’s drawing into a plush toy, you are in the
        right place!{" "}
      </p>
      <p>
        We have an individual approach to every plush toy we start making. Every
        specific detail on a drawing and every customer request regarding any
        feature of the final product is important to us, so we try to spend as
        much time as possible to achieve the best performance. We pay close
        attention to careful selection of materials and try to choose the most
        appropriate sewing technique every time we start developing a new toy.
        All of our toys are made with high quality fabrics (e.g., cotton,
        fleece, flannel) and stuffed with 100% polyester fiberfill.
      </p>
      <p>
        We are based in Croatia, Europe. Our team currently consists of three
        members:
      </p>
      <p>
        Ankica Has years of experience in creating handmade products, especially
        in the field of sewing and knitting. Since the launch of Doodle Your
        Toys, she is dedicated solely to making toys based on a children’s
        drawings. She is involved in every part of the creation process.{" "}
      </p>
      <p>
        Leona Contributes in all stages of development, but most of the time she
        spends in tailoring and preparating your sketch for sewing. This part is
        especially important when drawing has certain complexity, poor
        recognition of shapes, or it is necessary to apply a certain level of
        creativity and improvisation.{" "}
      </p>
      <p>
        Goran Responds to all your inquiries and comments, accepts and considers
        all your suggestions and ideas. He ensures that the entire process, from
        the receipt of an order to the delivery of the toy, goes through without
        any difficulties.
      </p>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

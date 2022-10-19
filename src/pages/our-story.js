import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form/contact-form"

import ankica from "../../content/assets/ankica-dyt.jpg"
import leona from "../../content/assets/leona-dyt.jpg"
import goran from "../../content/assets/goran-dyt.jpg"
// import bgimg from "../../content/assets/bg_image_2.jpeg"
import SVGour1 from "../../content/assets/svg/galaxy05.svg"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Our story" />
      {/* <img class="hero-img" src={bgimg} alt="heroimg" /> */}
      <Helmet bodyAttributes={{ class: "our-story-page" }} />
      <SVGour1 class="svgour1 svgs" />

      <div className="content-wrapper">
        <h1>OUR STORY</h1>
        <p>
          An international brand shaped between two spheres, driven by passion
          and intuition with the mission of bringing constant change and
          process, as well as celebrating the culture of dance music.
        </p>
        <p>
          Carefully crafted, Rave Your Soul takes a diverse approach and
          numerous directions when it comes to electronic music.
        </p>
        <p>
          Our vision is to create a safe space for souls to show their essential
          nature in a positive and bright color.
        </p>
        <p>When you make moves with closed eyes it shapes your soul.</p>
        <p class="quote">Sharp brains, warm hearts.</p>
      </div>

      {/* <img class="about-img" src={ankica} alt="Ankica" /> */}
      {/* <ContactForm /> */}
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

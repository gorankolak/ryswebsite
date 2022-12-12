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
import SVGour2 from "../../content/assets/svg/ellipse01.svg"
import SVGour3 from "../../content/assets/svg/abstract_shape13.svg"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Our story" />
      {/* <img class="hero-img" src={bgimg} alt="heroimg" /> */}
      <Helmet bodyAttributes={{ class: "our-story-page" }} />
      <SVGour1 class="svgour1 svgs" />
      <SVGour2 class="svgour2 svgs" />
      <SVGour3 class="svgour3 svgs" />

      <div className="content-wrapper">
        <h1>OUR STORY</h1>
        <p>
          A record label shaped between two spheres; driven by passion and
          intuition, on the mission of bringing constant change and process, as
          well as celebrating the culture of dance music.
        </p>
        <p>
          Carefully crafted, Rave Your Soul is mainly focused towards fast-paced
          grooves, an up to date modern-sounding techno - heavily influenced by
          the late 90s / 2000’s golden era, but also with a diverse approach -
          ready to take a numerous directions when it comes to electronic
          music. 
        </p>
        <p>
          Our vision is to develop a platform for new and upcoming generation of
          artists, a creative space for like-minded souls to show their
          essential nature in a positive and bright color.
        </p>
        <p>We are located in Osijek & Rotterdam.</p>
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

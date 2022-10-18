import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import HomeIntro from "../components/home-intro/home-intro"
import GalleryComponent from "../components/gallery/gallery"
import ContactForm from "../components/contact-form/contact-form"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Rave Your Soul" />
      {/* <div className="hero-img"></div> */}

      <HomeIntro />
      {/* <GalleryComponent /> */}
      {/* <ContactForm /> */}
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

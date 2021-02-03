import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import GalleryComponent from "../components/gallery/gallery"
import ContactForm from "../components/contact-form/contact-form"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Doodle Your Toys" />
      <p>
        We'll make you a unique plush toy based on your imagination. Send us
        your drawings, artworks, cartoons, sketches, or any kind of graphic
        design to mail@doodleyourtoys.com
      </p>
      <p>Turning drawings into stuffed plush toys - since 2013.</p>

      <GalleryComponent />
      <ContactForm />
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

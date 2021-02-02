import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GalleryComponent from "../components/gallery"
import ContactForm from "../components/contactform"

const BlogIndex = ({ data, path, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Doodle Your Toys" />
      <h2>Turning drawings to handmade toys</h2>
      <h3>Since 2013.</h3>
      <p>
        We make custom stuffed toys based on your children's imagination. Send
        us a photo of doodle, artwork, sketch, cartoon or any kind of drawing
        and we're going to turn it into your child's personalized toy.
      </p>
      <ul>
        <li>
          {/* TO-DO: Later transform to graphQL link usage */}
          <Link to="/ordering/">Ordering</Link>
        </li>
        <li>
          <Link to="/pricing/">Pricing</Link>
        </li>
        <li>
          <Link to="/about-us/">About Us</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
      </ul>
      <p>
        You're currently on the page "{path}" which was built on
        {data.site.buildTime}.
      </p>
      <GalleryComponent />
      <ContactForm />
    </Layout>
  )
}

export default BlogIndex

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

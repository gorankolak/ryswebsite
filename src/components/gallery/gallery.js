import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Gallery from "@browniebroke/gatsby-image-gallery"
import "@browniebroke/gatsby-image-gallery/dist/style.css"
import styles from "./gallery.module.css"

const GalleryComponent = () => {
  const data = useStaticQuery(graphql`
    query ImagesForGallery {
      allFile(filter: { absolutePath: { regex: "/(gallery)/" } }) {
        edges {
          node {
            childImageSharp {
              thumb: fluid(maxWidth: 270, maxHeight: 270) {
                ...GatsbyImageSharpFluid
              }
              full: fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)

  return (
    <div className={styles.galleryWrapper}>
      <Gallery images={images} />
    </div>
  )
}

export default GalleryComponent

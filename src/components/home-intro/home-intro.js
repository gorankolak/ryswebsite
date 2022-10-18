import React from "react"

import styles from "./home-intro.module.css"
import bgimg from "../../../content/assets/bg_image_1.jpeg"

const HomeIntro = () => {
  return (
    <div className={styles.HomeIntro}>
      <img class="hero-img" src={bgimg} alt="heroimg" />

      <ul class="main-list">
        <li>
          {/* <p className={styles.subtitle}>releases</p> */}
          <a
            href="https://raveyoursoul.bandcamp.com/"
            className={styles.title}
            target="_blank"
            rel="noreferrer"
          >
            Bandcamp
          </a>
        </li>
        <li>
          {/* <p className={styles.subtitle}>music</p> */}
          <a
            href="https://soundcloud.com/rave-your-soul"
            className={styles.title}
            target="_blank"
            rel="noreferrer"
          >
            SoundCloud
          </a>
        </li>

        {/* <li>
          <a className={styles.title}>contact</a>
        </li> */}
        <li class="disabled-item">
          {/* <p className={styles.subtitle}>coming soon</p> */}
          <a className={styles.title}>Instagram*</a>
        </li>
        <li class="disabled-item">
          {/* <p className={styles.subtitle}>coming soon</p> */}
          <a className={styles.title}>Blog*</a>
        </li>
        <li>
          {/* <p className={styles.subtitle}>videos</p> */}
          <a
            href="https://www.youtube.com/channel/UCG1BsV6As1PH84YGSytn3yg"
            className={styles.title}
            target="_blank"
            rel="noreferrer"
          >
            Youtube
          </a>
        </li>
        <li>
          {/* <p className={styles.subtitle}>videos</p> */}
          <a href="#contact" className={styles.title}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

export default HomeIntro

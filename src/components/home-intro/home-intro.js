import React from "react"

import styles from "./home-intro.module.css"
import bgimg from "../../../content/assets/bg_image_11.png"
import SVGbg1 from "../../../content/assets/svg/abstract_shape13.svg"
import SVGbg2 from "../../../content/assets/svg/abstract_shape29.svg"
import SVGbg3 from "../../../content/assets/svg/abstract_shape03.svg"
import SVGbg4 from "../../../content/assets/svg/sun04.svg"
import SVGbg5 from "../../../content/assets/svg/target_aim03.svg"

const HomeIntro = () => {
  return (
    <div className={styles.HomeIntro}>
      {/* <img class="hero-img" src={bgimg} alt="heroimg" /> */}
      {/* <SVGbg1 class="svgbg1 svgs" /> */}
      <SVGbg2 class="svgbg2 svgs" />
      {/* <SVGbg3 class="svgbg3 svgs" />
      <SVGbg3 class="svgbg4 svgs" /> */}
      <SVGbg4 class="svgbg3 svgs" />
      {/* <SVGbg4 class="svgbg4 svgs" /> */}
      <SVGbg5 class="svgbg1 svgs" />
      {/* <SVGbg5 class="svgbg2 svgs" /> */}

      <div className="main-list-wrapper">
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
    </div>
  )
}

export default HomeIntro

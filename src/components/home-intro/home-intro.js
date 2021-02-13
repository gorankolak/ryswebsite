import React from "react"

import styles from "./home-intro.module.css"

const HomeIntro = () => {
  return (
    <div className={styles.HomeIntro}>
      {/* <h1 className={styles.title}>
        Your <span>imagination</span>, our <span>creation</span>.
      </h1>
      <p className={styles.subtitle}>
        Turning drawings into plush toys - <span>since 2013.</span>
      </p> */}

      <h1 className={styles.title}>
        Turning drawings into <span>plush toys</span>.
      </h1>
      <p className={styles.subtitle}>Since 2013.</p>
    </div>
  )
}

export default HomeIntro

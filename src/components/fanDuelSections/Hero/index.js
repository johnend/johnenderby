import React from "react"
import styles from "./hero.module.scss"
import FanDuel from "../../../../static/images/svgComponents/fanDuelLogo"
// import SportsBookWeb from "../../../../static/images/SportsBook.png"
// import FanDuelWeb from "../../../../static/images/FanDuel.png"

export default function Hero() {
  return (
    <section className={styles.fdHero}>
      <div className={styles.contentWrapper}>
        <h2>FanDuel</h2>
        <h3>Daily fantasy sports, sports betting, and free to play games</h3>
        <div className={styles.content}>
          <p>
            In the following sections you'll see some of the work I've done for
            FanDuel during my time here. These screens and descriptions only
            scratch the surface of what was done on these projects so I'd gladly
            go into more detail{" "}
            <span role="img" alt="Smiling emoji">
              😄
            </span>
            .
          </p>
        </div>
      </div>
      <div className={styles.fdLogo}>
        <FanDuel />
        {/* <img src={FanDuelWeb} alt="" className={styles.fdWeb} />
          <img src={SportsBookWeb} alt="" className={styles.spbkWeb} /> */}
      </div>
    </section>
  )
}

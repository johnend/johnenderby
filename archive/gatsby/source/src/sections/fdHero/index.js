import React from "react"
import styles from "./hero.module.scss"
import FanDuel from "../../../static/images/svgComponents/fanDuelLogo"

export default function Hero() {
  return (
    <section className={styles.fdHero}>
      <div className={styles.contentWrapper}>
        <h2>FanDuel</h2>
        <h3>Free to play, daily fantasy sports, sports betting and more</h3>
        <div className={styles.content}>
          <p>
            In this section you'll find examples of some of the work I have done
            during my time at FanDuel.
          </p>
        </div>
      </div>
      <div className={styles.fdLogo}>
        <FanDuel />
      </div>
    </section>
  )
}

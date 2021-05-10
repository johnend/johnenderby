import React from "react"
import styles from "./work.module.scss"
import cx from "classnames"
import WorkGrid from "../../components/workGrid"
import WorkScroll from "../../components/workScroll"

export default function Work() {
  return (
    <section id="work" className={styles.work}>
      <h2>Work</h2>
      <h3>
        Some tasty samples to snack{" "}
        <span role="img" alt="Donut emoji">
          🍩
        </span>{" "}
        on*
      </h3>
      <div className={styles.content}>
        <p>
          Here you can see some example of projects I’ve worked on over the past
          few years.
        </p>
        <p className="small">
          *Some of these projects are password protected as they’re still being
          developed. If you’ve got a password head right on through to see more!{" "}
          <span role="img" alt="Smiling emoji">
            😁
          </span>
        </p>
      </div>
      <WorkGrid />
      <WorkScroll />
    </section>
  )
}

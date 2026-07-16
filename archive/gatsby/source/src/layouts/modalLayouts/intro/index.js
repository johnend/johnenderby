import React from "react"
import styles from "./intro.module.scss"
import cx from "classnames"

export default function Intro(props) {
  return (
    <div className={styles.introContainer}>
      <div>
        <div className={styles.introContent}>
          <h3 style={{ color: `${props.projectColor}` }}>What was needed?</h3>
          <p>{props.projectWhat}</p>
        </div>
        <div>
          <h3 style={{ color: `${props.projectColor}` }}>Why was it needed?</h3>
          <p>{props.projectWhy}</p>
        </div>
      </div>
    </div>
  )
}

import React from "react"
import styles from "./outro.module.scss"
import cx from "classnames"

export default function Outro(props) {
  return (
    <div className={styles.outroContainer}>
      <div>
        <div className={styles.outroContent}>
          <h3 style={{ color: `${props.projectColor}` }}>{props.outroTitle}</h3>
          <p>{props.outroPara}</p>
        </div>
        <div>
          <h3 className={styles.specialThanks}>
            {props.thankYou} <span>🙏</span>
          </h3>
          <p className={styles.caption}>{props.furtherInfo}</p>
        </div>
      </div>
    </div>
  )
}

import React, { useState } from "react"
import styles from "./modal.module.scss"
import cx from "classnames"
import ace360 from "../../../static/images/ace360.png"

export default function Modal(props) {
  return (
    <div className={styles.modalOverlay} onClick={props.backgroundClick}>
      <div
        className={styles.modalContainer}
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <button aria-label="Close modal" onClick={props.buttonClick}>
          <span>╳</span>Close
        </button>
        <div className={styles.content}>
          <a href={props.website}>
            <h1>{props.projectName}</h1>
          </a>
          <h3>{props.role}</h3>
          <p>{props.tldr}</p>
        </div>
      </div>
    </div>
  )
}

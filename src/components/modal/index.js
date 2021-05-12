import React, { useState } from "react"
import styles from "./modal.module.scss"
import cx from "classnames"
import ace360 from "../../../static/images/ace360.png"
import Splash from "../../layouts/modalLayouts/splash"
import Intro from "../../layouts/modalLayouts/intro"

export default function Modal(props) {
  return (
    <div className={styles.modalOverlay} onClick={props.backgroundClick}>
      <div
        className={styles.modalContainer}
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <div className={styles.buttonWrapper}>
          <button
            aria-label="Close modal"
            onClick={props.buttonClick}
            className={styles.closeButton}
          >
            <span>╳</span>Close
          </button>
        </div>
        <Splash
          projectName={props.projectName}
          projectColor={props.projectColor}
          website={props.website}
          role={props.role}
          client={props.client}
          projectTLDR={props.projectTLDR}
          splashBgImage={props.splashBgImage}
        />
        <Intro
          projectColor={props.projectColor}
          projectWhat={props.projectWhat}
          projectWhy={props.projectWhy}
        />
      </div>
    </div>
  )
}

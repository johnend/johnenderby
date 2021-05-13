import React, { useState } from "react"
import styles from "./modal.module.scss"
import cx from "classnames"
import ace360 from "../../../static/images/ace360.png"
import Splash from "../../layouts/modalLayouts/splash"
import Intro from "../../layouts/modalLayouts/intro"
import Process from "../../layouts/modalLayouts/process"

export default function Modal(props) {
  // Meta data getters and setters
  // let [projectName, setProjectName] = useState("Project name")

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
          disclaimer={props.disclaimer}
        />
        <Intro
          projectColor={props.projectColor}
          projectWhat={props.projectWhat}
          projectWhy={props.projectWhy}
        />
        <Process
          processIcon={"Door"}
          color="salmon"
          figmaLink="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F3f8uwvMAEDEMc0DAbHn0j6%2Fjohnenderby.com%3Fnode-id%3D13%253A39"
        />
      </div>
    </div>
  )
}

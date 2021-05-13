import React from "react"
import cx from "classnames"
import styles from "./iframe.module.scss"

export default function Iframe(props) {
  return (
    <iframe
      src={props.embedLink}
      className={styles.iframe}
      allowFullScreen
      title="figmaEmbed"
    ></iframe>
  )
}

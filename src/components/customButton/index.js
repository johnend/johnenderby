import React from "react"
import styles from "./customButton.module.scss"

export default function CustomButton(props) {
  return (
    <a href="/" className={styles.customButton}>
      <span className={styles.bouncyArrow}>{props.buttonIcon}</span>{" "}
      {props.buttonText}
    </a>
  )
}

import React from "react"
import styles from "./homeButton.module.scss"

export default function HomeButton() {
  return (
    <a href="/" className={styles.backButton}>
      <span className={styles.bouncyArrow}>←</span> Home
    </a>
  )
}

import React, { useState } from "react"
import styles from "./navBar.module.scss"

export default function Nav(props) {
  return (
    <nav className={styles.navContainer}>
      <ul>{props.navItems}</ul>
      <div className={styles.linkIndicator}></div>
    </nav>
  )
}

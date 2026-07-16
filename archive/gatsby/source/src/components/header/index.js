import React from "react"
import styles from "./header.module.scss"
import Nav from "../navBar"

export default function Header(props) {
  return (
    <header className={styles.headerContainer}>
      {/* <div className={styles.togglePlaceholder}></div> */}
      <Nav navItems={props.navItems} />
    </header>
  )
}

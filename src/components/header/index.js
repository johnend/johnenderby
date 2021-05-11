import React from "react"
import styles from "./header.module.scss"
import Nav from "../navBar"
import { mainNavLinks } from "../../../static/content"

let navLinks = mainNavLinks.map(function (i, index) {
  return (
    <li key={index}>
      <a href={i.id} id={i.id}>
        {i.title}
      </a>
    </li>
  )
})

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.togglePlaceholder}></div>
      <Nav navItems={navLinks} />
    </header>
  )
}

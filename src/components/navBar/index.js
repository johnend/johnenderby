import React from "react"
import styles from "./navBar.module.scss"
import { navItems } from "../../../static/content"

let navLinks = navItems.map(function (i, index) {
  return (
    <li key={index}>
      <a href={i.id} id={i.id}>
        {i.title}
      </a>
    </li>
  )
})

export default function Nav() {
  return (
    <nav>
      <ul>{navLinks}</ul>
      <div className={styles.linkIndicator}></div>
    </nav>
  )
}

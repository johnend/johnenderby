/**
 * Write-only the password as cookie
 */
import React, { useState } from "react"
import { setSessionPassword } from "./utils"
import styles from "./passwordProtect.module.scss"
import { Link } from "gatsby"
import { homeNavLink } from "../../../static/content"
import Header from "../header"

let navLinks = homeNavLink.map(function (i, index) {
  return (
    <li key={index}>
      <Link to={i.id} id={i.id}>
        {i.title}
      </Link>
    </li>
  )
})

const PasswordProtect = () => {
  const [password, setPassword] = useState("")

  const onSubmit = event => {
    event.preventDefault()
    setSessionPassword(password)
    window.location.reload() // eslint-disable-line
  }

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.wrapper}>
        <Header navItems={navLinks} />
        <div className={styles.formContainer}>
          <h3>Hold up ✋, this link is password protected</h3>
          <p>Please enter the password to continue</p>

          <input
            name="password"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            className={styles.input}
          />

          <button type="submit" className={styles.button}>
            Enter
          </button>
        </div>
      </div>
    </form>
  )
}

export default PasswordProtect

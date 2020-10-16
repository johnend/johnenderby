/**
 * Write-only the password as cookie
 */
import React, { useState } from "react"
import { setSessionPassword } from "@mkitio/gatsby-theme-password-protect/src/utils/utils"
import styles from "./passwordProtect.module.scss"
import HomeButton from "../../../components/homeButton"

const PasswordProtect = () => {
  const [password, setPassword] = useState("")

  const onSubmit = event => {
    event.preventDefault()
    setSessionPassword(password)
    window.location.reload() // eslint-disable-line
  }

  return (
    <div className={styles.wrapper}>
      <HomeButton />
      <div className={styles.formContainer}>
        <h3>Hold up ✋, this link is password protected</h3>
        <p>Please enter the password to continue</p>

        <form onSubmit={onSubmit} className={styles.form}>
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
        </form>
      </div>
    </div>
  )
}

export default PasswordProtect

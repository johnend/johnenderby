/* eslint-disable import/prefer-default-export, react/prop-types, consistent-return */
/**
 * Read-only the password from cookies
 */
import React from "react"
import {
  getSessionPassword,
  getQueryPassword,
  isProtectedPage,
} from "./src/components/passwordProtect/utils"
import PasswordProtect from "./src/components/passwordProtect"

export const wrapPageElement = ({ props }) => {
  const { location } = props
  const password = "Op3n_S3sam3"
  const pagePaths = ["/FanDuel", "/FanDuel/"]
  const partialMatching = false

  // password protection disabled
  if (!password) {
    return
  }

  // page-level protection
  const isPageLevelProtectionOn = pagePaths && pagePaths.length > 0
  if (isPageLevelProtectionOn) {
    // non-protected page
    if (!isProtectedPage(location, pagePaths, partialMatching)) {
      return
    }
  }

  // correct password
  const passwordCandidate = getQueryPassword(location) || getSessionPassword()
  if (passwordCandidate === password) {
    return
  }

  // check password
  return <PasswordProtect />
}

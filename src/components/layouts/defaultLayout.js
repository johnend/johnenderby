import React from "react"
import styles from "./defaultLayout.module.scss"
import cx from "classnames"

export default function DefaultLayout({ children, variant, skew, skewBack }) {
  return (
    <div className={cx(styles.sectionWrapper, styles[variant], styles[skew])}>
      <div className={cx(styles.contentWrapper, styles[skewBack])}>
        {children}
      </div>
    </div>
  )
}

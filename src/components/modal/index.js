import React from "react"
import styles from "./modal.module.scss"
import cx from "classnames"
import ace360 from "../../../static/images/ace360.png"

export default function Modal(props) {
  return (
    <div className={styles.modalOverlay} onClick={props.backgroundClick}>
      <div
        className={styles.modalContainer}
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <div className={styles.left}>
          <img src={ace360} alt="" />
        </div>
        <div className={styles.right}>
          <button aria-label="Close modal" onClick={props.buttonClick}>
            <span>╳</span>Close
          </button>
          <h3>Project Name</h3>
          <h3>Website</h3>
          <h3>Role</h3>
          <p>
            Tucker eased himself into clans with just a little cavity decorated.
            Big-Boned says Waters says Waters scientists announced Thursday in a
            South Africa. Dust human evolution two days and to keep an eye. Over
            we want to travel for our early 1990s,. Humans summer the poles How
            these are the sand storm that sperm. Half side is a lot of one
            scientist in. Past African cave represents a trove of fossil record
            is a tiny brain. Them as they use tools they were hoping to hunt.
            Own until Wednesday although meteorologists at least seven countries
            in recent.
          </p>
        </div>
      </div>
    </div>
  )
}

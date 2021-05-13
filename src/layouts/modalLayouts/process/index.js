import React from "react"
import styles from "./process.module.scss"
import cx from "classnames"
import Door from "../../../../static/images/svgComponents/door"
import Lightbulb from "../../../../static/images/svgComponents/lightbulb"
import RoundFlask from "../../../../static/images/svgComponents/roundFlask"
import Tag from "../../../../static/images/svgComponents/tag"
import Circuit from "../../../../static/images/svgComponents/circuit"
import Egg from "../../../../static/images/svgComponents/egg"
import Iframe from "../../../components/iFrame"

function Icon(x) {
  switch (x) {
    case "Door":
      return <Door />
    case "Lightbulb":
      return <Lightbulb />
    case "RoundFlask":
      return <RoundFlask />
    case "Tag":
      return <Tag />
    case "Circuit":
      return <Circuit />
    case "Egg":
      return <Egg />
    default:
      return null
  }
}

export default function Process({ reverse, color, ...props }) {
  return (
    <div className={cx(styles.processContainer, styles[reverse])}>
      <div className={styles.processContent}>
        <div className={styles.firstSection}>
          <div className={cx(styles.processIcon, styles[color + "bg"])}>
            {Icon(props.processIcon)}
          </div>
          <h3 className={cx(styles[color + "text"])}>{props.firstTitle}</h3>
          <p>{props.firstPara}</p>
        </div>
        <div className={styles.secondSection}>
          <h3 className={cx(styles[color + "text"])}>{props.secondTitle}</h3>
          <p>{props.secondPara}</p>
        </div>
      </div>
      <div className={styles.processVisuals}>
        <div className={styles.iframeContainer}>
          <Iframe embedLink={props.embedLink} />
          <p className={styles.caption}>{props.embedCaption}</p>
        </div>
      </div>
    </div>
  )
}

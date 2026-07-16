import React from "react"
import cx from "classnames"
import styles from "./processCard.module.scss"
import Door from "../../../static/images/svgComponents/door"
import Lightbulb from "../../../static/images/svgComponents/lightbulb"
import RoundFlask from "../../../static/images/svgComponents/roundFlask"
import Tag from "../../../static/images/svgComponents/tag"
import Circuit from "../../../static/images/svgComponents/circuit"
import Egg from "../../../static/images/svgComponents/egg"

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

export default function ProcessCard({ color, ...props }) {
  return (
    <div className={cx(styles.cardContainer)}>
      <div className={cx(styles.processIcon, styles[color])}>
        {Icon(props.processIcon)}
      </div>
      <div className={cx(styles.titleHighlight, styles[color])}></div>
      <h4>{props.processTitle}</h4>
      <p className="cardText">{props.processText}</p>
    </div>
  )
}

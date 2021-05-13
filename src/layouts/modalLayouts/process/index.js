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
          <h3 className={cx(styles[color + "text"])}>Define and discover</h3>
          <p>
            ACE360 was a large project requiring a lot of investigation into
            specifics of: constraints, workflows, permissions, and much more.
            For example, there are at least 3 different organisation types
            needing access to the system, and between them 14 different user
            levels with different access permissions.
          </p>
        </div>
        <div>
          <h3 className={cx(styles[color + "text"])}>Some other title</h3>
          <p>
            As a result of the complexities I worked with FISSS to run a number
            of workshops to get a better understanding of the information
            architecture, and workflows, within ACE360. The output of these
            sessions was a number of large scale journey maps and flow diagrams
            (something not previously done at xDesign prior to my working there)
            that helped me and the team understand this incredibly complex
            space, as well as breakdowns of epics and tickets for working with
            engineering (part of phase 2 product ownership).
          </p>
        </div>
      </div>
      <div className={styles.processVisuals}>
        <div className={styles.iframeContainer}>
          <Iframe figmaLink={props.figmaLink} />
          <caption>
            💡 Click the filename to go directly to the Figma file, or click the
            expand icon to go fullscreen
          </caption>
        </div>
      </div>
    </div>
  )
}

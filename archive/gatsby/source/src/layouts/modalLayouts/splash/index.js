import React from "react"
import styles from "./splash.module.scss"
import cx from "classnames"
import Menzies from "../../../../static/images/svgComponents/menzies"
import StAndrewsLinks from "../../../../static/images/svgComponents/stAndrews"
import ACE360 from "../../../../static/images/svgComponents/ace360"
import LifeQuay from "../../../../static/images/svgComponents/lifeQuay"
import AG from "../../../../static/images/svgComponents/assessorsGuild"
import NumberFire from "../../../../static/images/svgComponents/nfScout"
import FanDuel from "../../../../static/images/svgComponents/fanduelHorizontal"

function Icon(x) {
  switch (x) {
    case "ACE360":
      return <ACE360 />
    case "LifeQuay":
      return <LifeQuay />
    case "St Andrews Links":
      return <StAndrewsLinks />
    case "Cargo":
      return <Menzies />
    case "The Assessors Guild":
      return <AG />
    case "numberFire SCOUT":
      return <NumberFire />
    case "Free to play admin platform":
      return <FanDuel />
    case "Free to play games":
      return <FanDuel />
    case "PlayAction":
      return <FanDuel />
    case "Player videos":
      return <FanDuel />
    default:
      return null
  }
}

export default function Splash(props) {
  return (
    <div className={styles.splashContainer}>
      <div
        className={styles.splashImage}
        style={{
          backgroundColor: `${props.projectColor}`,
          backgroundImage: `url(${props.splashBgImage})`,
        }}
      >
        {Icon(props.projectName)}
      </div>
      <div className={styles.splashContent}>
        <div className={styles.introContent}>
          <a
            href={props.website}
            className={styles.projectName}
            style={{ color: `${props.projectColor}` }}
          >
            {props.projectName}
          </a>
          <p className={styles.projectTLDR}>{props.projectTLDR}</p>
          <strong>{props.client}</strong>
        </div>
        <div className={styles.introMeta}>
          <p className={styles.splashSubHead}>Role</p>
          <p className={styles.splashMetaContent}>{props.role}</p>
          <p className={styles.splashSubHead}>Tools</p>
          <p className={styles.splashMetaContent}>{props.tools}</p>
          <p className={styles.splashSubHead}>What did I do?</p>
          <p className={styles.splashMetaContent}>{props.did}</p>
        </div>
        <p className={styles.disclaimer}>{props.disclaimer}</p>
      </div>
    </div>
  )
}

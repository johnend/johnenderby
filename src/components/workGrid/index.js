import React from "react"
import styles from "./workGrid.module.scss"
import cx from "classnames"
import FanDuel from "../../../static/images/svgComponents/fanDuelLogo"
import Padlock from "../../../static/images/svgComponents/padlock"
import ace360 from "../../../static/images/ace360.png"
import lifeQuay from "../../../static/images/lifeQuay.png"
import aG from "../../../static/images/assessorsGuild.png"
import menziesCargo from "../../../static/images/menziesCargo.png"
import stAndrews from "../../../static/images/stAndrews.png"

export default function WorkGrid(props) {
  return (
    <div className={styles.workExamples}>
      <a
        href="#"
        title="Hassle free management of your important documents and processes 🗄"
        className={styles.lifeQuay}
        role="button"
        onClick={props.handleClick}
      >
        <img
          className={cx(styles.workExample, styles.narrow)}
          src={lifeQuay}
          alt="LifeQuay dashboard image on mobile"
          id="LifeQuay"
        />
      </a>
      <a
        href="#"
        title="Apprenticeship and advanced qualification management system 🎓"
        className={styles.ace360}
        role="button"
        onClick={props.handleClick}
      >
        <img
          className={cx(styles.workExample, styles.wide)}
          src={ace360}
          alt="ACE360 apprentice record on desktop"
          id="ACE360"
        />
      </a>
      <a
        href="#"
        title="A companion app for the home of golf ⛳"
        className={styles.stAndrews}
        role="button"
        onClick={props.handleClick}
      >
        <img
          className={cx(styles.workExample, styles.narrow)}
          src={stAndrews}
          alt="St Andrews links trust app homepage on mobile"
          id="StAndrews"
        />
      </a>
      <a
        href="/FanDuel"
        className={cx(styles.workExample, styles.narrow, styles.fanDuel)}
        title="Sports betting and Daily Fantasy. Password protected 🔒"
      >
        <div className={styles.fDSplash}>
          <FanDuel className={styles.fDLogo} />
          <p className={styles.fDTitle}>FanDuel</p>
        </div>
        <div className={styles.passwordProtected}>
          <span role="img" alt="padlock">
            <Padlock stroke={"#FFFFFF"} />
          </span>
          <p className="password">Password protected</p>
        </div>
      </a>
      <a
        href="#"
        title="An air freight management platform for really busy airports ✈️"
        className={styles.menziesCargo}
        role="button"
        onClick={props.handleClick}
      >
        <img
          className={cx(styles.workExample, styles.wide, styles.menziesCargo)}
          src={menziesCargo}
          alt="Menzies cargo dashboard on desktop"
          id="Menzies"
        />
      </a>
      <a
        href="#"
        title="Professional memberships for apprenticeship assessments from the Assessors Guild 💼"
        className={styles.aG}
        role="button"
        onClick={props.handleClick}
      >
        <img
          className={cx(styles.workExample, styles.narrow, styles.aG)}
          src={aG}
          alt="An example of an Assessors Guild membership level"
          id="AG"
        />
      </a>
    </div>
  )
}

import React from "react"
import styles from "./workScroll.module.scss"
import cx from "classnames"
import FanDuel from "../../../static/images/svgComponents/fanDuelLogo"
import Padlock from "../../../static/images/svgComponents/padlock"
import ace360 from "../../../static/images/ace360.png"
import lifeQuay from "../../../static/images/lifeQuay.png"
import aG from "../../../static/images/assessorsGuild.png"
import menziesCargo from "../../../static/images/menziesCargo.png"
import stAndrews from "../../../static/images/stAndrews.png"

export default function WorkScroll() {
  return (
    <div className={styles.workExamples}>
      <a
        href="/FanDuel"
        className={cx(styles.workExample, styles.narrow, styles.fanDuel)}
        title="Where I am now. Hiding things because some projects aren't shipped yet 😄"
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
        href=""
        title="LifeQuay: hassle free management of your important documents and processes"
        className={styles.lifeQuay}
      >
        <h3>LifeQuay</h3>
        <img
          className={cx(styles.workExample, styles.narrow)}
          src={lifeQuay}
          alt="LifeQuay dashboard image on mobile"
        />
      </a>
      <a
        href=""
        title="ACE360's features and benefits"
        className={styles.ace360}
      >
        <h3>ACE360</h3>
        <img
          className={cx(styles.workExample, styles.wide)}
          src={ace360}
          alt="ACE360 apprentice record on desktop"
        />
      </a>
      <a
        href=""
        title="The home of the app, on the home of golf's website"
        className={styles.stAndrews}
      >
        <h3>St Andrews Links</h3>
        <img
          className={cx(styles.workExample, styles.narrow)}
          src={stAndrews}
          alt="St Andrews links trust app homepage on mobile"
        />
      </a>
      <a
        href=""
        title="Professional memberships for apprenticeship assessments from the Assessors Guild"
        className={styles.menziesCargo}
      >
        <h3>Menzies Cargo</h3>
        <img
          className={cx(styles.workExample, styles.wide)}
          src={menziesCargo}
          alt="Menzies cargo dashboard on desktop"
          title="Ask me about this one, no public link available 😄"
        />
      </a>
      <a
        href=""
        title="Professional memberships for apprenticeship assessments from the Assessors Guild"
        className={styles.aG}
      >
        <h3>Assessor's Guild</h3>
        <img
          className={cx(styles.workExample, styles.narrow, styles.aG)}
          src={aG}
          alt="An example of an Assessors Guild membership level"
        />
      </a>
    </div>
  )
}

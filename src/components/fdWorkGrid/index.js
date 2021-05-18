import React from "react"
import styles from "./workGrid.module.scss"
import cx from "classnames"
import FanDuel from "../../../static/images/svgComponents/fanDuelLogo"
import Padlock from "../../../static/images/svgComponents/padlock"
import f2pAdmin from "../../../static/images/f2pGameList.png"
import nFHome from "../../../static/images/numberFireHome.png"
import playAction from "../../../static/images/fdPlayAction.png"
import playerVideos from "../../../static/images/playerVideos3.png"
import wFH from "../../../static/images/winFromHome.png"

export default function WorkGrid(props) {
  return (
    <div className={styles.workExamples}>
      <a
        href="#"
        title="numberFire SCOUT: a reimagining of an old product"
        className={styles.nFHome}
        role="button"
        onClick={props.handleClick}
      >
        <img
          className={cx(styles.workExample, styles.narrow)}
          src={nFHome}
          alt="numberFire home screen concept"
          id="numberFire"
        />
      </a>
      <a
        href="#"
        title="Free to play admin: internal SaaS for generating games on the fly"
        className={styles.f2pAdmin}
        role="button"
        onClick={props.handleClick}
      >
        <img
          className={cx(styles.workExample, styles.wide)}
          src={f2pAdmin}
          alt="F2P admin games table"
          id="f2pAdmin"
        />
      </a>
      <a
        href="#"
        title="Free to play pick'em games"
        className={styles.wFH}
        role="button"
        onClick={props.handleClick}
      >
        <img
          className={cx(styles.workExample, styles.narrow)}
          src={wFH}
          alt="Win from home pick'em game"
          id="f2pGames"
        />
      </a>
      <FanDuel className={cx(styles.narrow, styles.fanDuel)} />
      <a
        href="#"
        title="Player videos: video content to help with fantasy sports line-up research"
        className={styles.playerVideos}
        role="button"
        onClick={props.handleClick}
      >
        <img
          className={cx(styles.workExample, styles.wide, styles.playerVideos)}
          src={playerVideos}
          alt="Player videos concept in a web view"
          id="playerVideos"
        />
      </a>
      <a
        href="#"
        title="Free, interactive live betting"
        className={styles.playAction}
        role="button"
        onClick={props.handleClick}
      >
        <img
          className={cx(styles.workExample, styles.narrow, styles.playAction)}
          src={playAction}
          alt="Play Action how to play screen"
          id="playAction"
        />
      </a>
    </div>
  )
}

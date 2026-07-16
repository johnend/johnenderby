import React from "react"
import styles from "./workScroll.module.scss"
import cx from "classnames"
import FanDuel from "../../../static/images/svgComponents/fanDuelLogo"
import Padlock from "../../../static/images/svgComponents/padlock"
import f2pAdmin from "../../../static/images/f2pGameList.png"
import nFHome from "../../../static/images/numberFireHome.png"
import playAction from "../../../static/images/fdPlayAction.png"
import playerVideos from "../../../static/images/playerVideos3.png"
import wFH from "../../../static/images/winFromHome.png"

export default function WorkScroll(props) {
  return (
    <div className={styles.workExamples}>
      <a
        href="#"
        title="numberFire SCOUT: a reimagining of an old product"
        className={styles.nFHome}
        onClick={props.handleClick}
        id="numberFire"
      >
        <h3>SCOUT</h3>
        <img
          className={cx(styles.workExample, styles.narrow)}
          src={nFHome}
          alt="numberFire home screen concept"
        />
      </a>
      <a
        href="#"
        title="Free, interactive live betting"
        className={styles.playAction}
        onClick={props.handleClick}
        id="playAction"
      >
        <h3>Play Action</h3>
        <img
          className={cx(styles.workExample, styles.narrow)}
          src={playAction}
          alt="Play Action how to play screen"
        />
      </a>
      <a
        href="#"
        title="Player videos: video content to help with fantasy sports line-up research"
        className={styles.playerVideos}
        onClick={props.handleClick}
        id="playerVideos"
      >
        <h3>Player Videos</h3>
        <img
          className={cx(styles.workExample, styles.wide)}
          src={playerVideos}
          alt="Player videos concept in a web view"
        />
      </a>
      <a
        href="#"
        title="Free to play pick'em games"
        className={styles.wFH}
        onClick={props.handleClick}
        id="f2pGame"
      >
        <h3>Free to Play Games</h3>
        <img
          className={cx(styles.workExample, styles.narrow, styles.wFH)}
          src={wFH}
          alt="Win from home pick'em game"
        />
      </a>
      <a
        href="#"
        title="Free to play admin: internal SaaS for generating games on the fly"
        className={styles.f2pAdmin}
        onClick={props.handleClick}
        id="f2pAdmin"
      >
        <h3>Free to Play Admin</h3>
        <img
          className={cx(styles.workExample, styles.wide)}
          src={f2pAdmin}
          alt="F2P admin games table"
        />
      </a>
    </div>
  )
}

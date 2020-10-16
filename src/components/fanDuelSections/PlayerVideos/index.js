import React from "react"
import styles from "./playerVideos.module.scss"
import PlayerVideoIcon from "../../../../static/images/svgComponents/playerVideoIcon"
import playerVideos1 from "../../../../static/images/playerVideos1.png"
import playerVideos2 from "../../../../static/images/playerVideos2.png"
import playerVideos3 from "../../../../static/images/playerVideos3.png"

export default function Hero() {
  return (
    <section className={styles.playerVideos}>
      <h2>Player videos</h2>
      <h3>
        Informative player video{" "}
        <span role="img" alt="Video camera emoji">
          📹{" "}
        </span>
        content
      </h3>
      <div className={styles.content}>
        <p>
          FanDuel, like many companies in the sports betting industry, produces
          a lot of its own content for customers to consume when researching
          lineups or bets. The head of content wanted to get some of this
          content into the daily fantasy sports app to tie in with the written
          content coming from our own stats and research sites as well as
          partner content.
        </p>
        <p>
          Through research we gauged appetite for tour videos and I did a lot of
          exploratory 🗺️ designs. We then tested 🧪 prototypes with users, and
          after some tweaks, released the feature to a subset of the user base
          to gauge impact. After a short while we had gathered enough data to
          confidently release to the entire daily fantasy app user base. You'll
          find this feature in the FanDuel fantasy app now, look for the little
          recent video news icon{" "}
          <span
            role="img"
            alt="FanDuel daily fantasy sports player video icon"
            className={styles.playerVideoIcon}
          >
            <PlayerVideoIcon />
          </span>{" "}
          on player cards.
        </p>
      </div>
      <div className={styles.playerVideosImages}>
        <img
          src={playerVideos1}
          alt="Fantasy app showing an example of new video content on the iOS app"
          className={styles.playerVideos1}
        />
        <img
          src={playerVideos2}
          alt='An example of a video playing in a "semi-custom" video player view'
          className={styles.playerVideos2}
        />
        <img
          src={playerVideos3}
          alt="An example of the web version of the player video content module"
          className={styles.playerVideos3}
        />
      </div>
    </section>
  )
}

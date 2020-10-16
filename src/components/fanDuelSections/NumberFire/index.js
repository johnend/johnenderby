import React from "react"
import styles from "./numberFire.module.scss"
import numberFireHome from "../../../../static/images/numberFireHome.png"
import numberFirePlayerList from "../../../../static/images/numberFirePlayerList.png"
import numberFireArticleSearch from "../../../../static/images/numberFireArticleSearch.png"
import numberFirePlayerView from "../../../../static/images/numberFirePlayerView.png"

export default function NumberFire() {
  return (
    <section className={styles.numberFire}>
      <h2>numberFire App Concept</h2>
      <h3>
        A hackathon project turned roadmap item{" "}
        <span role="img" alt="Raised hands emoji">
          🙌
        </span>
      </h3>
      <div className={styles.content}>
        <p>
          Every six months to a year FanDuel staff have a hackathon. It's an
          opportunity for folks to get together in teams they wouldn't usually
          be in, or work solo, and create anything they want to that they feel
          might add some value to the business, or the user experience. I
          decided to come up with an alternate version of the numberFire app,
          and combine it with a forgotten FanDuel app. <br /> SCOUT 👀 a FanDuel
          research app allowed users to view stats of their favourite players
          and shortlist them (shortlisted players would show up in the fantasy
          app for drafting). Working with one of the data analysts we realised
          that SCOUT users playing and participated in 1.5x more paid contests
          than non-SCOUT users.
        </p>
        <p>
          numberFire on the other hand was a company acquired by FanDuel that
          focused on helping players pick their lineups, and make better
          decisions. So it seemed to me that it would be a good idea to combine
          these two apps! numberFire SCOUT was born 🍼, well as an idea if
          nothing else! <br /> After presenting the idea to the company at the
          end of the hackathon it turned out I wasn't the only one thinking that
          same way 🤔. The very same head of content from the player videos
          project spoke to me soon after the hackathon to get the idea onto the
          numberFire roadmap, and while my exact designs might not be used, they
          certainly got the ball rolling.
        </p>
      </div>
      <div className={styles.numberFireSCOUTImages}>
        <img src={numberFireHome} alt="numberFire homepage concept" />
        <img
          src={numberFireArticleSearch}
          alt="numberFire article search results concept"
        />
        <img
          src={numberFirePlayerList}
          alt="numberFire player list view concept"
        />
        <img
          src={numberFirePlayerView}
          alt="numberFire player details view concept"
        />
      </div>
    </section>
  )
}

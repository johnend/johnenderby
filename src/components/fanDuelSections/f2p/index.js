import React from "react"
import styles from "./f2p.module.scss"
import cx from "classnames"
import createGame from "../../../../static/images/createGameMeta.png"
import anythingBook from "../../../../static/images/coloradoAnythingBook.png"
import pickemTemplate from "../../../../static/images/pickemtemplate.png"
import f2pGames from "../../../../static/images/f2pGameList.png"
import upsell from "../../../../static/images/upsell.png"
import winfromhome from "../../../../static/images/winFromHome.png"
import questionCollections from "../../../../static/images/questionCollections.png"

export default function F2P() {
  return (
    <section id="work" className={styles.work}>
      <h2>Free to play self service</h2>
      <h3>A big chunk of cheese 🧀...work with upsides</h3>
      <div className={styles.content}>
        <p>
          FanDuel spends a lot of money on third party engineering teams, and as
          part of the focus in 2020 the company wanted to bring as much of that
          expertise in house as possible. One of the areas where we relied
          heavily on third parties was our free to play games 🎲. When the new
          vertical was spun up I jumped at the chance to work on a project like
          this. Having designed big systems before (ACE360) I wanted to get
          stuck into solving complex problems again and building our own
          internal free to play game generation platform is certainly something
          to get your teeth 🦷 stuck into.
        </p>
        <p>
          With a number of complexities to build into the system (games that run
          as one offs, across multiple days, or with different interaction
          types) there is a lot to account for, and a lot to do 🏗️. We're
          building our MVP right now, so I can't go into too much detail here.
          Suffice to say the MVP will be a big change for free to play games at
          FanDuel, shortening the time to develop new games and ideas, and
          giving company some space to reinvest the money we spend on third
          parties 💸.
        </p>
      </div>
      <div className={styles.workExamples}>
        <img
          title="Anything Book was a state launch pick'em game"
          className={cx(styles.workExample, styles.narrow, styles.anythingBook)}
          src={anythingBook}
          alt="Example Anything Book pick'em game question"
        />
        <img
          className={cx(styles.workExample, styles.wide, styles.createGame)}
          title="Create game meta information form within the free to play admin interface"
          src={createGame}
          alt="View of the create game admin screen"
        />

        <img
          className={cx(styles.workExample, styles.narrow, styles.upsell)}
          title="An example of an upsell screen in a free to play game"
          src={upsell}
          alt="Free to play game upsell example in Rough'N'Rowdy"
        />
        <img
          className={cx(styles.workExample, styles.narrow, styles.winFromHome)}
          src={winfromhome}
          alt="The homepage of the Win from Home multiday game"
          title="A game we put together at the beginning of the COVID-19 outbreak when very few sports were being played"
        />
        <img
          className={cx(styles.workExample, styles.wide, styles.f2pGames)}
          src={f2pGames}
          alt="Dashboard within the free to play admin system showing games and their statuses."
          title="This is a very complex workflow 😅"
        />
        <img
          className={cx(
            styles.workExample,
            styles.narrow,
            styles.pickemTemplate
          )}
          src={pickemTemplate}
          alt="An example of an Assessors Guild membership level"
        />
        <img
          className={cx(
            styles.workExample,
            styles.wide,
            styles.questionCollections
          )}
          src={questionCollections}
          alt="A view of the question collections attached to a game within the free to play admin"
        />
      </div>
    </section>
  )
}

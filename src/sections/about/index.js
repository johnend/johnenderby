import React from "react"
import styles from "./about.module.scss"
import { socialData } from "../../../static/content"
import SocialCard from "../../components/socialCard"

let socialBoxes = socialData.map(function (i, index) {
  return (
    <SocialCard
      key={index}
      socialIcon={i.iconName}
      socialNetwork={i.network}
      socialClass={i.iconName}
      socialContent={i.subtitle}
      socialLink={i.link}
      sharingInfo={i.sharingInfo}
    />
  )
})

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About me</h2>
      <h3>Is it really work if you like doing it?</h3>
      <div className={styles.content}>
        <p>
          I was born in Boston, but probably not the one you've heard of. I
          don't "paak my caar near Haavad Yaad" or anything like that. Boston,
          England{" "}
          <span role="img" alt="English flag">
            🏴󠁧󠁢󠁥󠁮󠁧󠁿
          </span>{" "}
          is where I was born. I don't live there anymore though. I moved to
          Scotland{" "}
          <span role="img" alt="Scottish flag">
            🏴󠁧󠁢󠁳󠁣󠁴󠁿
          </span>
          . You might ask why, but honestly I came to study physiology{" "}
          <span role="img" alt="DNA emoji">
            🧬
          </span>{" "}
          at the University of St Andrews and never wanted to leave. I had a
          couple of brief visits to Manchester and London while I studied law{" "}
          <span role="img" alt="Balance scales emoji">
            ⚖️
          </span>{" "}
          and worked as a chef{" "}
          <span role="img" alt="Chef emoji">
            👨‍🍳
          </span>{" "}
          but that didn't last long and I came back to Scotland.
          <br />
          While I was here, and after I'd finished learning, I got a job at a
          small marketing agency. I continued to learn things, and eventually
          found myself coming up with ideas for our clients to upgrade the
          experiences of their websites. I fell into the UX and design rabbit
          hole head first{" "}
          <span role="img" alt="Rabbit and black circle emojis">
            🐇⚫
          </span>
          . A few other things happened between then and now, but I ended up
          working at FanDuel making cool{" "}
          <span role="img" alt="Sunglasses emoji">
            😎
          </span>{" "}
          free to play games.
        </p>
        <p>
          I believe that products can speak for themselves a lot of the time,
          and that we should design and build good, useful, features for users
          which will generate cash monies{" "}
          <span role="img" alt="Money with wings emoji">
            💸
          </span>
          for the businesses we work for by being worthy of it. You know
          field-of-dreams-style product development{" "}
          <span role="img" alt="Baseball emoji">
            ⚾
          </span>{" "}
          .
          <br />
          Outside of my day to day I have a pretty healthy appetite for hobbies
          and activities. I enjoy lifting heavy things in the gym{" "}
          <span role="img" alt="Weightlifter emoji">
            🏋️‍♂️
          </span>
          , gaming on my Playstation or PC{" "}
          <span role="img" alt="Game controller emoji">
            🎮
          </span>
          , eating good food (and pizza{" "}
          <span role="img" alt="Pizza emoji">
            🍕
          </span>
          ), and, when I get the opportunity to, playing golf{" "}
          <span role="img" alt="Golf flag in hole emoji">
            ⛳
          </span>
          . I live with my wife and dog{" "}
          <span role="img" alt="Dog emoji">
            🐶
          </span>{" "}
          in Edinburgh (he looks a lot like this emoji actually, but black
          splodges instead of brown). You should come visit, there's a castle{" "}
          <span role="img" alt="European castle emoji">
            🏰
          </span>
          !
        </p>
      </div>
      <div className={styles.socialBoxes}>{socialBoxes}</div>
    </section>
  )
}

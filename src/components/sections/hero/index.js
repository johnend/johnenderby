import React from "react"
import styles from "./hero.module.scss"
import JohnAvatar from "../../../../static/images/svgComponents/john"
import ReactRotatingText from "react-rotating-text"

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div>
        <p>
          Hi{" "}
          <span role="img" aria-label="Waving hand emoji">
            👋
          </span>
          , I'm
        </p>
        <h1>John Enderby</h1>
        <p>
          a{" "}
          <ReactRotatingText
            items={[
              "product designer 🖍️",
              "front end developer 💻",
              "chef 🧑‍🍳",
              "golfer 🏌️‍♂️",
              "husband 👫",
              "dog dad 🐶",
            ]}
          />{" "}
          from Edinburgh
        </p>
      </div>
      <JohnAvatar />
    </section>
  )
}

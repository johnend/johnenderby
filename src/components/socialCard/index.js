import React from "react"
import styles from "./socialCard.module.scss"
import cx from "classnames"
import Dribbble from "../../../static/images/svgComponents/dribbble"
import GitHub from "../../../static/images/svgComponents/github"
import Twitter from "../../../static/images/svgComponents/twitter"
import Spotify from "../../../static/images/svgComponents/spotify"
import PSN from "../../../static/images/svgComponents/psn"
import PokemonGo from "../../../static/images/svgComponents/pokemonGo"

function Icon(x) {
  switch (x) {
    case "Twitter":
      return <Twitter />
    case "GitHub":
      return <GitHub />
    case "Dribbble":
      return <Dribbble />
    case "Spotify":
      return <Spotify />
    case "PSN":
      return <PSN />
    case "PokemonGo":
      return <PokemonGo />
    default:
      return null
  }
}

export default function SocialCard({ socialClass, ...props }) {
  return (
    <a
      href={props.socialLink}
      className={cx(styles[socialClass], styles.cardContainer)}
    >
      <div className={styles.socialIcon}>{Icon(props.socialIcon)}</div>
      <div className={styles.socialCardContent}>
        <div className={styles.socialHeader}>
          <h5>{props.socialNetwork}</h5>
          <p className={styles.sharingInfo}>{props.sharingInfo}</p>
        </div>
        <p className="cardText">{props.socialContent}</p>
      </div>
    </a>
  )
}

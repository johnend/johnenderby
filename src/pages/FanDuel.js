import React from "react"
import DefaultLayout from "../layouts/pageLayouts/defaultLayout"
import CustomButton from "../components/customButton"
import Hero from "../components/fanDuelSections/Hero"
import PlayerVideos from "../components/fanDuelSections/PlayerVideos"
import NumberFire from "../components/fanDuelSections/NumberFire"
import F2P from "../components/fanDuelSections/f2p"
import { Link } from "gatsby"
import { homeNavLink } from "../../static/content"
import Header from "../components/header"

let navLinks = homeNavLink.map(function (i, index) {
  return (
    <li key={index}>
      <Link to={i.id} id={i.id}>
        {i.title}
      </Link>
    </li>
  )
})

export default function FanDuelPage() {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header navItems={navLinks} />
      <CustomButton buttonText="Home" buttonIcon="←" />
      <DefaultLayout variant="white">
        <Hero />
      </DefaultLayout>
      <DefaultLayout variant="grey">
        <PlayerVideos />
      </DefaultLayout>
      <DefaultLayout variant="white">
        <NumberFire />
      </DefaultLayout>
      <DefaultLayout variant="grey" skew="skewFanDuel" skewBack="skewBack">
        <F2P />
      </DefaultLayout>
      <DefaultLayout>
        <h3 className="specialThanks">
          Thanks for reading <span>🙇‍♂️</span>!
        </h3>
      </DefaultLayout>
    </div>
  )
}

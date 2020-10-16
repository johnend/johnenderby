import React from "react"
import DefaultLayout from "../components/layouts/defaultLayout"
import HomeButton from "../components/homeButton"
import Hero from "../components/fanDuelSections/Hero"
import PlayerVideos from "../components/fanDuelSections/PlayerVideos"
import NumberFire from "../components/fanDuelSections/NumberFire"
import F2P from "../components/fanDuelSections/f2p"

export default function FanDuelPage() {
  return (
    <div
      style={{
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <HomeButton />
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

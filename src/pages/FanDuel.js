import React from "react"
import DefaultLayout from "../layouts/pageLayouts/defaultLayout"
import Hero from "../sections/fdHero"
import { Link } from "gatsby"
import { homeNavLink } from "../../static/content"
import Header from "../components/header"
import Work from "../sections/fdWork"

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
      <DefaultLayout variant="white">
        <Hero />
      </DefaultLayout>
      <DefaultLayout variant="fdBlue">
        <Work />
      </DefaultLayout>
    </div>
  )
}

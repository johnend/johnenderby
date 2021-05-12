import React from "react"
import DefaultLayout from "../components/layouts/defaultLayout"
import Hero from "../sections/hero"
import Process from "../sections/process"
import Work from "../sections/work"
import About from "../sections/about"
import ResumeCV from "../sections/resume"
import Header from "../components/header"
import { mainNavLinks } from "../../static/content"
import { Link } from "gatsby"

let navLinks = mainNavLinks.map(function (i, index) {
  return (
    <li key={index}>
      <Link to={i.id} id={i.id}>
        {i.title}
      </Link>
    </li>
  )
})

export default function Home() {
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
      <DefaultLayout variant="grey">
        <Process />
      </DefaultLayout>
      <DefaultLayout variant="white">
        <Work />
      </DefaultLayout>
      <DefaultLayout variant="grey" skew="skewHome" skewBack="skewBack">
        <About />
      </DefaultLayout>
      <DefaultLayout>
        <ResumeCV />
      </DefaultLayout>
    </div>
  )
}

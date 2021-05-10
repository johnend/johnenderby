import React from "react"
import DefaultLayout from "../components/layouts/defaultLayout"
import Hero from "../sections/hero"
import Process from "../sections/process"
import Work from "../sections/work"
import About from "../sections/about"
import ResumeCV from "../sections/resume"
import Header from "../components/header"

export default function Home() {
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
      <Header />
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

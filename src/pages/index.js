import React from "react"
import DefaultLayout from "../components/layouts/defaultLayout"
import Hero from "../components/sections/hero"
import Process from "../components/sections/process"
import Work from "../components/sections/work"
import About from "../components/sections/about"
import ResumeCV from "../components/sections/resume"

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
      <DefaultLayout variant="white">
        {/* <Header /> */}
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

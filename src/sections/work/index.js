import React, { useState, useEffect } from "react"
import styles from "./work.module.scss"
import cx from "classnames"
import WorkGrid from "../../components/workGrid"
import WorkScroll from "../../components/workScroll"
import { caseStudies } from "../../../static/content"
import Modal from "../../components/modal"

export default function Work() {
  const [showModal, setShowModal] = useState(false)

  // Data object
  let modalData = null

  // Meta data getters and setters
  let [projectName, setProjectName] = useState("Project name")
  let [projectColor, setProjectColor] = useState("#bada55")
  let [website, setWebsite] = useState("https://example.com")
  let [role, setRole] = useState("Lead designer, product owner")
  let [client, setClient] = useState("Client name")
  let [projectTLDR, setProjectTLDR] = useState("Some text about the project")
  let [splashBgImage, setsplashBgImage] = useState("")
  let [splashDisclaimer, setsplashDisclaimer] = useState("")

  //Intro data getters and setters
  let [projectWhat, setProjectWhat] = useState("What are we doing?")
  let [projectWhy, setProjectWhy] = useState("Why are we doing it?")

  const openModal = e => {
    e.preventDefault()

    let clicked = e.target.id

    // Data setting
    let caseStudyMetaData = x => {
      //Meta data
      setProjectName(modalData.meta.projectName)
      setProjectColor(modalData.meta.projectColor)
      setWebsite(modalData.meta.website)
      setRole(modalData.meta.role)
      setClient(modalData.meta.client)
      setProjectTLDR(modalData.meta.projectTLDR)
      setsplashBgImage(modalData.meta.splashImage)
      setsplashDisclaimer(modalData.meta.disclaimer)

      //IntroData
      setProjectWhat(modalData.intro.what)
      setProjectWhy(modalData.intro.why)
    }

    switch (clicked) {
      case "LifeQuay":
        modalData = caseStudies[0].lifeQuay
        caseStudyMetaData(modalData)
        break
      case "ACE360":
        modalData = caseStudies[1].ace360
        caseStudyMetaData(modalData)
        break
      case "StAndrews":
        modalData = caseStudies[2].stAndrews
        caseStudyMetaData(modalData)
        break
      case "Menzies":
        modalData = caseStudies[3].menzies
        caseStudyMetaData(modalData)
        break
      case "AG":
        modalData = caseStudies[4].AG
        caseStudyMetaData(modalData)
        break
      default:
        return null
        break
    }

    setShowModal(prev => !prev)
  }

  useEffect(() => {
    showModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflowY = "scroll")
  }, [showModal])

  return (
    <section id="work" className={styles.work}>
      <h2>Work</h2>
      <h3>
        Some tasty samples to snack{" "}
        <span role="img" alt="Donut emoji">
          🍩
        </span>{" "}
        on*
      </h3>
      <div className={styles.content}>
        <p>
          Here you can see some example of projects I’ve worked on over the past
          few years.
        </p>
        <p className="small">
          *Some of these projects are password protected as they’re still being
          developed. If you’ve got a password head right on through to see more!{" "}
          <span role="img" alt="Smiling emoji">
            😁
          </span>
        </p>
      </div>
      <WorkGrid handleClick={openModal} />
      <WorkScroll handleClick={openModal} />
      {showModal ? (
        <Modal
          backgroundClick={() => setShowModal(false)}
          buttonClick={() => setShowModal(prev => !prev)}
          //Meta data
          projectName={projectName}
          projectColor={projectColor}
          website={website}
          role={role}
          client={client}
          projectTLDR={projectTLDR}
          splashBgImage={splashBgImage}
          disclaimer={splashDisclaimer}
          // Intro
          projectWhat={projectWhat}
          projectWhy={projectWhy}
        />
      ) : null}
    </section>
  )
}

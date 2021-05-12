import React, { useState, useEffect } from "react"
import styles from "./work.module.scss"
import cx from "classnames"
import WorkGrid from "../../components/workGrid"
import WorkScroll from "../../components/workScroll"
import { caseStudies } from "../../../static/content"
import Modal from "../../components/modal"

export default function Work() {
  const [showModal, setShowModal] = useState(false)

  let [projectName, setProjectName] = useState("Project name")
  let [website, setWebsite] = useState("https://example.com")
  let [role, setRole] = useState("Lead designer, product owner")
  let [tldr, settldr] = useState("Some text about the project")

  let modalData = null

  const openModal = e => {
    e.preventDefault()

    let clicked = e.target.id

    let caseStudyDataSet = x => {
      setProjectName(modalData.meta.projectName)
      setWebsite(modalData.meta.website)
      setRole(modalData.meta.role)
      settldr(modalData.meta.tldr)
    }

    switch (clicked) {
      case "LifeQuay":
        modalData = caseStudies[0].lifeQuay
        caseStudyDataSet(modalData)
        break
      case "ACE360":
        modalData = caseStudies[1].ace360
        caseStudyDataSet(modalData)
        break
      case "StAndrews":
        modalData = caseStudies[2].stAndrews
        caseStudyDataSet(modalData)
        break
      case "Menzies":
        modalData = caseStudies[3].menzies
        caseStudyDataSet(modalData)
        break
      case "AG":
        modalData = caseStudies[4].AG
        caseStudyDataSet(modalData)
        break
      default:
        return null
        break
    }

    setShowModal(prev => !prev)

    console.log(projectName)
    console.log(website)
    console.log(role)
    console.log(tldr)
  }

  useEffect(() => {
    showModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset")
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
          projectName={projectName}
          website={website}
          role={role}
          tldr={tldr}
        />
      ) : null}
    </section>
  )
}

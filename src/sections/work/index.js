import React, { useState } from "react"
import styles from "./work.module.scss"
import cx from "classnames"
import WorkGrid from "../../components/workGrid"
import WorkScroll from "../../components/workScroll"
import { caseStudies } from "../../../static/content"
import Modal from "../../components/modal"

export default function Work() {
  const [showModal, setShowModal] = useState(false)
  let modalData = null

  const openModal = e => {
    e.preventDefault()

    let clicked = e.target.id

    switch (clicked) {
      case "LifeQuay":
        modalData = caseStudies[0].lifeQuay
        break
      case "ACE360":
        modalData = caseStudies[1].ace360
        break
      case "StAndrews":
        modalData = caseStudies[2].stAndrews
        break
      case "Menzies":
        modalData = caseStudies[3].menzies
        break
      case "AG":
        modalData = caseStudies[4].AG
        break
      default:
        return null
        break
    }

    setShowModal(prev => !prev)
    console.log(modalData)
  }

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
        />
      ) : null}
    </section>
  )
}

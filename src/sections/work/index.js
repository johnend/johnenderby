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

  // Visuals data getters and setters
  let [discoverVisuals, setdiscoverVisuals] = useState("")
  let [ideateVisuals, setideateVisuals] = useState("")
  let [testVisuals, settestVisuals] = useState("")
  let [deliverVisuals, setdeliverVisuals] = useState("")

  // Caption data getters and setters
  let [discoverCaption, setdiscoverCaption] = useState("")
  let [ideateCaption, setideateCaption] = useState("")
  let [testCaption, settestCaption] = useState("")
  let [deliverCaption, setdeliverCaption] = useState("")

  //Intro data getters and setters
  let [projectWhat, setProjectWhat] = useState("What are we doing?")
  let [projectWhy, setProjectWhy] = useState("Why are we doing it?")

  //Define section getters and setters
  let [defineFirstTitle, setdefineFirstTitle] = useState("")
  let [defineFirstPara, setdefineFirstPara] = useState("")
  let [defineSecondTitle, setdefineSecondTitle] = useState("")
  let [defineSecondPara, setdefineSecondPara] = useState("")
  //Ideate section getters and setters
  let [ideateFirstTitle, setideateFirstTitle] = useState("")
  let [ideateFirstPara, setideateFirstPara] = useState("")
  let [ideateSecondTitle, setideateSecondTitle] = useState("")
  let [ideateSecondPara, setideateSecondPara] = useState("")
  //Test section getters and setters
  let [testFirstTitle, settestFirstTitle] = useState("")
  let [testFirstPara, settestFirstPara] = useState("")
  let [testSecondTitle, settestSecondTitle] = useState("")
  let [testSecondPara, settestSecondPara] = useState("")
  //Deliver section getters and setters
  let [deliverFirstTitle, setdeliverFirstTitle] = useState("")
  let [deliverFirstPara, setdeliverFirstPara] = useState("")
  let [deliverSecondTitle, setdeliverSecondTitle] = useState("")
  let [deliverSecondPara, setdeliverSecondPara] = useState("")
  //Outro section getters and setters
  let [outroTitle, setoutroTitle] = useState("")
  let [outroPara, setoutroPara] = useState("")
  let [thankYou, setthankYou] = useState("")
  let [furtherInfo, setfurtherInfo] = useState("")

  const openModal = e => {
    e.preventDefault()

    let clicked = e.target.id

    // Data setting
    let caseStudyData = x => {
      //Meta data
      setProjectName(modalData.meta.projectName)
      setProjectColor(modalData.meta.projectColor)
      setWebsite(modalData.meta.website)
      setRole(modalData.meta.role)
      setClient(modalData.meta.client)
      setProjectTLDR(modalData.meta.projectTLDR)
      setsplashBgImage(modalData.meta.splashImage)
      setsplashDisclaimer(modalData.meta.disclaimer)

      //Visuals data
      setdiscoverVisuals(modalData.visuals.discovery)
      setideateVisuals(modalData.visuals.ideate)
      settestVisuals(modalData.visuals.test)
      setdeliverVisuals(modalData.visuals.deliver)

      //Caption data
      setdiscoverCaption(modalData.caption.discovery)
      setideateCaption(modalData.caption.ideate)
      settestCaption(modalData.caption.test)
      setdeliverCaption(modalData.caption.deliver)

      //IntroData
      setProjectWhat(modalData.intro.what)
      setProjectWhy(modalData.intro.why)

      //DefineData
      setdefineFirstTitle(modalData.define.firstTitle)
      setdefineFirstPara(modalData.define.firstPara)
      setdefineSecondTitle(modalData.define.secondTitle)
      setdefineSecondPara(modalData.define.secondPara)

      //IdeateData
      setideateFirstTitle(modalData.ideate.firstTitle)
      setideateFirstPara(modalData.ideate.firstPara)
      setideateSecondTitle(modalData.ideate.secondTitle)
      setideateSecondPara(modalData.ideate.secondPara)

      //TestData
      settestFirstTitle(modalData.test.firstTitle)
      settestFirstPara(modalData.test.firstPara)
      settestSecondTitle(modalData.test.secondTitle)
      settestSecondPara(modalData.test.secondPara)

      //DefineData
      setdeliverFirstTitle(modalData.deliver.firstTitle)
      setdeliverFirstPara(modalData.deliver.firstPara)
      setdeliverSecondTitle(modalData.deliver.secondTitle)
      setdeliverSecondPara(modalData.deliver.secondPara)

      //OutroData
      setoutroTitle(modalData.outro.outroTitle)
      setoutroPara(modalData.outro.outroPara)
      setthankYou(modalData.outro.thankYou)
      setfurtherInfo(modalData.outro.furtherInfo)
    }

    switch (clicked) {
      case "LifeQuay":
        modalData = caseStudies[0].lifeQuay
        caseStudyData(modalData)
        break
      case "ACE360":
        modalData = caseStudies[1].ace360
        caseStudyData(modalData)
        break
      case "StAndrews":
        modalData = caseStudies[2].stAndrews
        caseStudyData(modalData)
        break
      case "Menzies":
        modalData = caseStudies[3].menzies
        caseStudyData(modalData)
        break
      case "AG":
        modalData = caseStudies[4].AG
        caseStudyData(modalData)
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
          //Visuals
          discoverVisuals={discoverVisuals}
          ideateVisuals={ideateVisuals}
          testVisuals={testVisuals}
          deliverVisuals={deliverVisuals}
          //Visuals
          discoverCaption={discoverCaption}
          ideateCaption={ideateCaption}
          testCaption={testCaption}
          deliverCaption={deliverCaption}
          //Intro
          projectWhat={projectWhat}
          projectWhy={projectWhy}
          //Define
          defineFirstTitle={defineFirstTitle}
          defineFirstPara={defineFirstPara}
          defineSecondTitle={defineSecondTitle}
          defineSecondPara={defineSecondPara}
          //Ideate
          ideateFirstTitle={ideateFirstTitle}
          ideateFirstPara={ideateFirstPara}
          ideateSecondTitle={ideateSecondTitle}
          ideateSecondPara={ideateSecondPara}
          //Test
          testFirstTitle={testFirstTitle}
          testFirstPara={testFirstPara}
          testSecondTitle={testSecondTitle}
          testSecondPara={testSecondPara}
          //Deliver
          deliverFirstTitle={deliverFirstTitle}
          deliverFirstPara={deliverFirstPara}
          deliverSecondTitle={deliverSecondTitle}
          deliverSecondPara={deliverSecondPara}
          //Outro
          outroTitle={outroTitle}
          outroPara={outroPara}
          thankYou={thankYou}
          furtherInfo={furtherInfo}
        />
      ) : null}
    </section>
  )
}

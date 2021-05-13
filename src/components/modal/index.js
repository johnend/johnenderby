import React, { useEffect, useState } from "react"
import styles from "./modal.module.scss"
import cx from "classnames"
import ace360 from "../../../static/images/ace360.png"
import Splash from "../../layouts/modalLayouts/splash"
import Intro from "../../layouts/modalLayouts/intro"
import Process from "../../layouts/modalLayouts/process"

import { caseStudies } from "../../../static/content"
import Outro from "../../layouts/modalLayouts/outro"

export default function Modal(props) {
  return (
    <div className={styles.modalOverlay} onClick={props.backgroundClick}>
      <div
        className={styles.modalContainer}
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <div className={styles.buttonWrapper}>
          <button
            aria-label="Close modal"
            onClick={props.buttonClick}
            className={styles.closeButton}
          >
            <span>╳</span>Close
          </button>
        </div>
        <Splash
          projectName={props.projectName}
          projectColor={props.projectColor}
          website={props.website}
          role={props.role}
          client={props.client}
          projectTLDR={props.projectTLDR}
          splashBgImage={props.splashBgImage}
          disclaimer={props.disclaimer}
        />
        <Intro
          projectColor={props.projectColor}
          projectWhat={props.projectWhat}
          projectWhy={props.projectWhy}
        />
        {/* Define section */}
        <Process
          processIcon={"Door"}
          color="salmon"
          embedLink={props.discoverVisuals}
          embedCaption={props.discoverCaption}
          //Data
          firstTitle={props.defineFirstTitle}
          firstPara={props.defineFirstPara}
          secondTitle={props.defineSecondTitle}
          secondPara={props.defineSecondPara}
        />
        {/* Ideate section */}
        <Process
          reverse="reverse"
          processIcon={"Lightbulb"}
          color="fuchsia"
          embedLink={props.ideateVisuals}
          embedCaption={props.ideateCaption}
          //Data
          firstTitle={props.ideateFirstTitle}
          firstPara={props.ideateFirstPara}
          secondTitle={props.ideateSecondTitle}
          secondPara={props.ideateSecondPara}
        />
        {/* Test section */}
        <Process
          processIcon={"RoundFlask"}
          color="lilac"
          embedLink={props.testVisuals}
          embedCaption={props.testCaption}
          //Data
          firstTitle={props.testFirstTitle}
          firstPara={props.testFirstPara}
          secondTitle={props.testSecondTitle}
          secondPara={props.testSecondPara}
        />
        {/* Deliver section */}
        <Process
          reverse="reverse"
          processIcon={"Tag"}
          color="purple"
          embedLink={props.deliverVisuals}
          embedCaption={props.deliverCaption}
          //Data
          firstTitle={props.deliverFirstTitle}
          firstPara={props.deliverFirstPara}
          secondTitle={props.deliverSecondTitle}
          secondPara={props.deliverSecondPara}
        />
        <Outro
          projectColor={props.projectColor}
          outroTitle={props.outroTitle}
          outroPara={props.outroPara}
          thankYou={props.thankYou}
          furtherInfo={props.furtherInfo}
        />
      </div>
    </div>
  )
}

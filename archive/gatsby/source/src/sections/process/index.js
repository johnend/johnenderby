import React from "react"
import styles from "./process.module.scss"
import ProcessCard from "../../components/processCard"
import { cardData } from "../../../static/content"

let processBoxes = cardData.map(function (i, index) {
  return (
    <ProcessCard
      key={index}
      color={i.color}
      processIcon={i.icon}
      processTitle={i.title}
      processText={i.text}
    />
  )
})

export default function Process() {
  return (
    <section id="process" className={styles.process}>
      <h2>My Process</h2>
      <h3>
        Starting small{" "}
        <span role="img" alt="Pinching hand emoji">
          🤏
        </span>{" "}
        and thinking{" "}
        <span role="img" alt="Brain emoji">
          🧠
        </span>{" "}
        big
      </h3>
      <div className={styles.content}>
        <p>
          I believe in a considered approach to design, and I try to be
          methodical{" "}
          <span role="img" aria-label="Test tube emoji">
            🧪
          </span>{" "}
          while I'm being creative{" "}
          <span role="img" aria-label="artist's palette emoji">
            🎨
          </span>
          . The designer's method isn't all that different from the scientific
          method really; we theorise, hypothesise, test, invariably have to
          revisit our theories, and get closer and closer to a solution. In
          order to get to a solution there often needs to be a fair amount of
          compromise. Compromise on time, efficiencies, or future proofing.
          Ultimately it's about making the decision that feels right, at the
          right time{" "}
          <span role="img" aria-label="Heart emoji">
            ❤️
          </span>
          .
        </p>
        <p>
          Once we have a solution in place to a problem{" "}
          <span role="img" aria-label="checked box emoji">
            ✅
          </span>{" "}
          it all starts over again with another one, or maybe an expansion on
          something previously considered. Each of these small pieces fit
          together in the puzzle{" "}
          <span role="img" aria-label="jigsaw puzzle piece emoji">
            🧩
          </span>
          to form the product with each feature having a purpose, but none able
          to stand alone without a clear image of the product and a solid
          foundation. Complex products and interactions are what make me tick{" "}
          <span role="img" aria-label="watch emoji">
            ⌚
          </span>
          and digging into, and attempting to solve, these problems is where I
          am happiest.
        </p>
      </div>
      <div className={styles.processBoxes}>{processBoxes}</div>
    </section>
  )
}

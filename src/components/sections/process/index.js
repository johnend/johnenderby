import React from "react"
import styles from "./process.module.scss"
import ProcessCard from "../../processCard"
import { cardData } from "../../../../static/content"

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
          methodical 🧪 while I'm being creative 🎨. The designer's method isn't
          all that different from the scientific method really; we theorise,
          hypothesise, test, invariably have to revisit our theories, and get
          closer and closer to a solution. The solution can mean compromise.
          Compromise on time, efficiencies, or future proofing. Ultimately it's
          about making the decision that feels right, at the right time ❤️.
        </p>
        <p>
          Once we have a solution in place to a problem ✅ it all starts over
          again with another one, or maybe an expansion on something previously
          considered. Each of these small pieces fit together in the puzzle 🧩
          to form the product with each feature having a purpose, but none able
          to stand alone without a clear image of the product and a solid
          foundation. Complex products and interactions are what make me tick ⌚
          and digging into, and attempting to solve, these problems is where I
          am happiest.
        </p>
      </div>
      <div className={styles.processBoxes}>{processBoxes}</div>
    </section>
  )
}

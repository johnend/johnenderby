import React from "react"
import styles from "./resume.module.scss"
import PdfIcon from "../../../../static/images/svgComponents/pdfIcon"
import Résumé from "../../../../static/images/pdfs/John Enderby Résumé.pdf"
import CV from "../../../../static/images/pdfs/John Enderby CV.pdf"

export default function Resume() {
  return (
    <section id="resume" className={styles.resume}>
      <div>
        <h2>Résumé</h2>
        <h3>My résumé right here →</h3>
        <div className={styles.content}>
          <p>…or CV, depending on your preference.</p>
        </div>
      </div>
      <div className={styles.resumeDownloadArea}>
        <a href={Résumé} className={styles.pdfIconContainer}>
          <PdfIcon />
        </a>
        <div className={styles.resumeDownloadLinks}>
          <a href={Résumé} title="John Enderby Résumé">
            résumé.pdf
          </a>
          <a href={CV} title="John Enderby CV">
            cv.pdf
          </a>
        </div>
      </div>
    </section>
  )
}

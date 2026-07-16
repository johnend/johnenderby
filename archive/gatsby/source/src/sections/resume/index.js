import React from "react"
import styles from "./resume.module.scss"
import PdfIcon from "../../../static/images/svgComponents/pdfIcon"
import Resume from "../../../static/images/pdfs/Resume.pdf"

export default function ResumeCV() {
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
        <a
          href="https://www.notion.so/Resume-d51fea1177364ba4b07eced84dfb184f"
          className={styles.pdfIconContainer}
        >
          <PdfIcon />
        </a>
        <div className={styles.resumeDownloadLinks}>
          <a
            href="https://www.notion.so/Resume-d51fea1177364ba4b07eced84dfb184f"
            title="John Enderby Résumé - Notion version"
          >
            Notion version
          </a>
          <a href={Resume} title="John Enderby Résumé - PDF version">
            Résumé.pdf
          </a>
        </div>
      </div>
    </section>
  )
}

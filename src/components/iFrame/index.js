import React from "react"

export default function Iframe(props) {
  return (
    <iframe
      src={props.figmaLink}
      style={{
        border: "1px solid rgba(0,0,0,0.1)",
        width: "95%",
        height: "50%",
      }}
      allowFullScreen
      title="figmaEmbed"
    ></iframe>
  )
}

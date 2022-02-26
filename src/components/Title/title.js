import React from "react"

const Title = ({ title, styleClass }) => {
  return (
    <div className="section-title uk-margin-remove-bottom ">
      <h2>{title || "default title"}</h2>
      <div className={`underline ${styleClass ? styleClass : ""}`}></div>
    </div>
  )
}

export default Title

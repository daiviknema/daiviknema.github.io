import React from "react"
import containerStyle from "../styles/container.module.css"

export default ({ children }) => {
  return <div className={containerStyle.container}>{children}</div>
}

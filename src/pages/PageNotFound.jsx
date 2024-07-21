import React from "react"

import StickManAnimation from "../Components/stickManAnimation/StickManAnimation.jsx"
import ErrorAnimation from "../Components/errorAnimation/ErrorAnimation.jsx"
import { Navbar } from "../Components/Navbar.jsx"

const PageNotFound = ({ theme, setTheme }) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar theme={theme} setTheme={setTheme} />

      <ErrorAnimation />

      <StickManAnimation />
    </div>
  )
}

export default PageNotFound

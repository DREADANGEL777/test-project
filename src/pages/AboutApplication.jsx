import React from "react"

import { Navbar } from "../Components/Navbar.jsx"

import AboutOurApllicationText from "../Components/aboutOurApplicationText/AboutOurApplicationText.jsx"

const AboutApplication = ({ theme, setTheme }) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar theme={theme} setTheme={setTheme} />

      <AboutOurApllicationText />
    </div>
  )
}

export default AboutApplication

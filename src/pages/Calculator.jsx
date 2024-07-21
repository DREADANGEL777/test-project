import React from "react"

import { Navbar } from "../Components/Navbar.jsx"
import CalculatorMode from "../Components/calculator/CalculatorMode.jsx"

const Calculator = ({ theme, setTheme }) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar theme={theme} setTheme={setTheme} />

      <CalculatorMode />
    </div>
  )
}

export default Calculator

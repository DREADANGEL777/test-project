import { HashRouter as Router, Routes, Route } from "react-router-dom"
import React, { useState } from "react"

import "./App.css"
import Home from "./pages/Home"
import AboutApplication from "./pages/AboutApplication"
import { Layout } from "./Layout"
import { Navbar } from "./Components/Navbar"
import PageNotFound from "./pages/PageNotFound"
import Calculator from "./pages/Calculator"

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme")
    return savedTheme ? savedTheme : "light"
  })
  console.log("sdkfksf")

  return (
    <Routes>
      <Route element={<Layout theme={theme} setTheme={setTheme} />}>
        <Route exact path="/" element={<Home theme={theme} setTheme={setTheme} />} />
        <Route path="/home" element={<Home theme={theme} setTheme={setTheme} />} />
        <Route
          path="/aboutapplication"
          element={<AboutApplication theme={theme} setTheme={setTheme} />}
        />
        <Route path="/calculator" element={<Calculator theme={theme} setTheme={setTheme} />} />
        <Route path="*" element={<PageNotFound theme={theme} setTheme={setTheme} />} />
      </Route>
    </Routes>
  )
}

export default App

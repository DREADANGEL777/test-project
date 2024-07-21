import React, { useState, useEffect } from "react"
import "./App.css"

function ChangeTheme({ theme, setTheme }) {
  // const [theme, setTheme] = useState(() => {
  //   const savedTheme = localStorage.getItem("theme")
  //   return savedTheme ? savedTheme : "light"
  // })
  console.log("sdlfksdlf")
  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light"
      console.log("New theme:", newTheme)
      return newTheme
    })
  }

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme} className="glowOnHover3">
        Switch to {theme === "light" ? "Dark" : "Light"} theme
      </button>
    </div>
  )
}

export default ChangeTheme

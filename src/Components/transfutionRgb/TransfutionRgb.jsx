import React, { useState, useEffect } from "react"

import "./TransfutionRgb.module.css"

const TransfutionRgb = ({ rgb, setRgb }) => {
  useEffect(() => {
    localStorage.setItem("rgb", rgb)
  }, [rgb])

  const toggleRgb = () => {
    setRgb((prevRgb) => {
      const newRgb = prevRgb === "start" ? "stop" : "start"
      console.log("New theme:", newRgb)
      return newRgb
    })
  }

  return (
    <div className={`Rgb ${rgb}`} >
      <button onClick={() => toggleRgb()} className="glowOnHover3">
        Rgb {rgb === "start" ? "start" : "stop"}
      </button>
    </div>
  )
}

export default TransfutionRgb

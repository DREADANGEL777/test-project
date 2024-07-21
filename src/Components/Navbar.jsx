import React, { useState } from "react"
import { Link } from "react-router-dom"

import ChangeTheme from "./changeTheme/ChangeTheme"
import TransfutionRgb from "./transfutionRgb/TransfutionRgb"
import s from "./Navbar.module.css"

export function Navbar({ theme, setTheme }) {
  const [rgb, setRgb] = useState(() => {
    const savedRgb = localStorage.getItem("rgb")
    return savedRgb ? savedRgb : "start"
  })

  return (
    <div className={`App ${theme}`}>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
        className={`Rgb ${rgb}`}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/home">
            <button className={s.glowOnHover}>Home</button>
          </Link>
          <Link to="/aboutapplication">
            <button className={s.glowOnHover3}>About application</button>
          </Link>
          <Link to="/calculator">
            <button className={s.glowOnHover}>Calculator</button>
          </Link>
        </div>
        <div style={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <div className={s.logoName} style={{}}>
            BEISLAIN
          </div>
        </div>
        <div style={{ marginRight: "10px" }}>
          <TransfutionRgb rgb={rgb} setRgb={setRgb} style={{ borderRadius: "5px" }} />
        </div>

        <div>
          <ChangeTheme theme={theme} setTheme={setTheme} style={{ borderRadius: "5px" }} />
        </div>
      </header>
    </div>
  )
}

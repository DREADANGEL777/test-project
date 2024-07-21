import { Navbar } from "./Components/Navbar"
import { Outlet } from "react-router-dom"

import "./Layout"
import ChangeTheme from "./Components/changeTheme/ChangeTheme"

export function Layout({ theme, setTheme }) {
  console.log("Layout", theme)
  return (
    <div className={`App ${theme}`}>
      {/* <div style={{ display: "flex", justifyContent: "center" , alignItems: "center"}}> */}
      {/* <Navbar theme={theme} setTheme={setTheme} /> */}
      {/* </div> */}
      <Outlet />
    </div>
  )
}

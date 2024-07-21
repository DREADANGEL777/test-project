import React from "react"

import ItemList from "../Components/itemList/ItemList.jsx"
import ChangeTheme from "../Components/changeTheme/ChangeTheme.jsx"
import { Navbar } from "../Components/Navbar.jsx"

function Home({ theme, setTheme }) {
  console.log("AboutUsPage", theme)
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar theme={theme} setTheme={setTheme} />
      <ItemList />
    </div>
  )
}

export default Home

import React from "react"
import { HashRouter, BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/test-project/">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)

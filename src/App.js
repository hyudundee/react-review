import React from "react"
import Header from "./components/Header"
import "./App.css"
function App() {
  const firstName = "Haoran"
  const lastName = "Yu"
  return (
    <div>
      <Header />
      <input type="checkbox" />
      <p>Hello {firstName + " " + lastName}!</p>
      <input type="checkbox" />
      <p>Hello firstName + " " + lastName!</p>
      <input type="checkbox" />
      <p>Placeholder text here</p>
      <input type="checkbox" />
      <p>Placeholder text here</p>
    </div>
  )
}

export default App
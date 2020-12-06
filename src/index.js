import React from 'react'
import ReactDOM from 'react-dom'

function MyInfo() {
  return (
    <div>
      <h1>Haoran Yu</h1>
      <p>A MSCS student from Northeastern University</p>
      <ul>
        <li>Google intern</li>
        <li>Facebook intern</li>
        <li>Apple intern</li>
      </ul>
    </div>
  )
}

ReactDOM.render(MyInfo(), document.getElementById("root"))
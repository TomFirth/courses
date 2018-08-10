import React from 'react'
import ReactDom from 'react-dom'

const app = {
  title: 'Visibility Toggle',
  state: false
}

const toggleVisibility = () => {
  app.state = !app.state
  render()
}

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleVisibility}>{app.state ? 'Hide details' : 'Show details'}</button>
      {app.state &&
        <p>You can now see these details!</p>
      }
    </div>
  )
  var appRoot = document.getElementById('app')
  ReactDom.render(template, appRoot)
}

render()

import React, { Component } from 'react'
import { render } from 'react-dom'

export default class App extends Component {
  render () {
    return (
      <dev>
        Hello world!
      </dev>
    )
  }
}

render(<App />, document.getElementById('app'))

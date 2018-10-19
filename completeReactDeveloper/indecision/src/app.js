import React from 'react'
import ReactDom from 'react-dom'
import { Action, AddOption, Header, Options } from './components'

class Indecision extends React.Component {
  constructor (props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      error: '',
      options: [],
      selectedAction: ''
    }
  }

  handleAddOption (option) {
    if (!option) {
      return 'Enter a valid value'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      }
    })
  }

  handleDeleteOptions () {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick () {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    this.setState(() => {
      return {
        selectedAction: this.state.options[randomNum]
      }
    })
  }

  render () {
    return (
      <div>
        <Header
          title='Indecision'
          subTitle='Let me decide for you.'
        />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          selectedAction={this.state.selectedAction} />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

ReactDom.render(<Indecision />, document.getElementById('app'))

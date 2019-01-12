import React from 'react'
import { Action, AddOption, Header, Options, OptionModal } from '../components'
import general from '../helpers/general'
import messages from '../config/messages.json'

class Indecision extends React.Component {
  constructor (props) {
    super(props)
    this.handleAddOption = general.handleAddOption.bind(this)
    this.handleClearSelectedAction = general.handleClearSelectedAction.bind(this)
    this.handleDeleteOption = general.handleDeleteOption.bind(this)
    this.handleDeleteOptions = general.handleDeleteOptions.bind(this)
    this.handlePick = general.handlePick.bind(this)
    this.state = {
      error: undefined,
      options: [],
      selectedAction: undefined
    }
  }

  componentDidMount () {
    try {
      const json = window.localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      console.error('componentDidMount', e)
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      window.localStorage.setItem('options', json)
      console.log('saving data')
    }
  }

  render () {
    return (
      <React.Fragment>
        <Header
          subTitle={messages.subTitle}
          title={messages.title}
        />
        <div className='container'>
          <Action
            handlePick={this.handlePick}
            messages={messages}
            options={this.state.options}
            selectedAction={this.state.selectedAction} />
          <div className='widget'>
            <Options
              handleDeleteOption={this.handleDeleteOption}
              handleDeleteOptions={this.handleDeleteOptions}
              messages={messages}
              options={this.state.options}
            />
            <OptionModal
              handleClearSelectedAction={this.handleClearSelectedAction}
              messages={messages}
              selectedAction={this.state.selectedAction} />
            <AddOption
              handleAddOption={this.handleAddOption}
              messages={messages} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Indecision

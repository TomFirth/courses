import React, { PureComponent } from 'React'

class Action extends PureComponent {
  render () {
    return (
      <React.Fragment>
        <button
          className='big-button'
          disabled={this.props.options.length === 0}
          onClick={this.props.handlePick}>
          {this.props.messages.question}
        </button>
      </React.Fragment>
    )
  }
}

export default Action

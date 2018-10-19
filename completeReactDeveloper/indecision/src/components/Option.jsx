import React, { PureComponent } from 'React'

class Option extends PureComponent {
  render () {
    return (
      <li key={this.props.option}>{this.props.option}</li>
    )
  }
}

export default Option

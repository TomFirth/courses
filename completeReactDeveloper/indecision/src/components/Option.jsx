import React, { PureComponent } from 'React'

class Option extends PureComponent {
  render () {
    return (
      <div className='option'>
        <p className='option__text'>{this.props.count}. {this.props.option}</p>
        <button
          className='button button--link'
          onClick={(e) => {
            this.props.handleDeleteOption(this.props.option)
          }}>
          {this.props.messages.removeOne}
        </button>
      </div>
    )
  }
}

export default Option

import React, { PureComponent } from 'React'

class AddOption extends PureComponent {
  constructor (props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleAddOption (e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)

    this.setState(() => {
      return { error }
    })

    if (!error) {
      e.target.elements.option.value = ''
    }
  }
  render () {
    return (
      <React.Fragment>
        {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
        <form className='add-option' onSubmit={this.handleAddOption}>
          <input className='add-option__input ' type='text' name='option' />
          <button className='button'>{this.props.messages.addOption}</button>
        </form>
      </React.Fragment>
    )
  }
}

export default AddOption

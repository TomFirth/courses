const general = module.exports = {
  handleAddOption (option) {
    if (!option) {
      return 'Enter a valid value'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }
    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }))
  },

  handleClearSelectedAction () {
    this.setState(() => ({
      selectedAction: undefined
    }))
  },

  handleDeleteOption (optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }))
  },

  handleDeleteOptions () {
    this.setState(() => ({
      options: []
    }))
  },

  handlePick () {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    this.setState(() => ({
      selectedAction: this.state.options[randomNum]
    }))
  }
}

export default general

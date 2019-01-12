import React, { PureComponent } from 'React'
import Modal from 'react-modal'

class OptionModal extends PureComponent {
  render () {
    return (
      <Modal
        contentLabel={this.props.messages.modalMessage}
        isOpen={Boolean(this.props.selectedAction)}
        onRequestClose={this.props.handleClearSelectedAction}
        closeTimeoutMS={200}
        className='modal'
      >
        <h3 classname='modal__title'>{this.props.messages.modalMessage}</h3>
        <p className='modal__body'>{this.props.selectedAction}</p>
        <button className='button' onClick={this.props.handleClearSelectedAction}>{this.props.messages.modalClose}</button>
      </Modal>
    )
  }
}

export default OptionModal

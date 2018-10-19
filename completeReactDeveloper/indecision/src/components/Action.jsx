import React, { PureComponent } from 'React'

class Action extends PureComponent {
  render () {
    return (
      <div>
        {this.props.selectedAction &&
          <React.Fragment>
            <span>Do this thing: </span>
            {this.props.selectedAction}
          </React.Fragment>
        }
        <div>
          <button
            disabled={!this.props.hasOptions}
            onClick={this.props.handlePick}>
              What should I do?
          </button>
          <p>{this.props.hasOptions ? 'Here are your options' : 'No options'}</p>
        </div>
      </div>
    )
  }
}

export default Action

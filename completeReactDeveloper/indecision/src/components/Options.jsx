import React, { PureComponent } from 'React'
import { Option } from '../components'

class Options extends PureComponent {
  render () {
    const hasOptions = this.props.options.length > 0
    return (
      <React.Fragment>
        <div className='widget-header'>
          <h3 className='widget-header__title'>
            {hasOptions ? (
              <React.Fragment>{this.props.messages.optionsListTitle}</React.Fragment>
            ) : (
              <React.Fragment>
                {this.props.messages.noOptions}
              </React.Fragment>
            )}
          </h3>
          {hasOptions &&
            <button
              className='button button--link'
              onClick={this.props.handleDeleteOptions}>
              {this.props.messages.removeOptions}
            </button>
          }
        </div>
        <div className='widget__message'>
          {hasOptions ? (
            <React.Fragment>
              {this.props.options.map((option, index) => {
                return <Option
                  count={index + 1}
                  handleDeleteOption={this.props.handleDeleteOption}
                  key={option}
                  messages={this.props.messages}
                  option={option}
                />
              })}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {this.props.options.length === 0 && <p>Please add an option to get started</p>}
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default Options

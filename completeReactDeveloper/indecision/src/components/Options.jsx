import React, { PureComponent } from 'React'
import { Option } from '../components'

class Options extends PureComponent {
  render () {
    return (
      <div>
        {(this.props.options.length > 0 &&
          <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All Options</button>
            <ol>
              {this.props.options.map(option => {
                return <Option key={option} option={option} />
              })}
            </ol>
          </div>
        )}
      </div>
    )
  }
}

export default Options

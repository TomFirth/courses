import React, { PureComponent } from 'React'

class Header extends PureComponent {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {(this.props.subTitle && <h2>{this.props.subTitle}</h2>)}
      </div>
    )
  }
}

export default Header

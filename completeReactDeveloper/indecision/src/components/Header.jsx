import React, { PureComponent } from 'React'

class Header extends PureComponent {
  render () {
    return (
      <div className='header'>
        <div className='container'>
          <h1 className='header__title'>{this.props.title}</h1>
          {(this.props.subTitle && <h2 className='header__subtitle'>{this.props.subTitle}</h2>)}
        </div>
      </div>
    )
  }
}

export default Header

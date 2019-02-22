import React from 'React'

const Single = (props) => (
  <div>
    Item {props.match.params.id}
  </div>
)

export default Single

import React from 'react';
import './index.css'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
  render() {
    return (
    <div className='card'>
      <h1>{this.props.title}</h1>
      {this.props.children}
    </div>)
  }
}

export default Card
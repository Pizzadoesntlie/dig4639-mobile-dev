import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list : []
    }
  }

addList() {
  let newItem = {
    item: this.state.list
  }
  this.setState(
    {list: [...this.state.list, newItem]}
  )
}

  render() {
    return(
      <div>
      <p><input type="button" value="Add Item" onClick={() => this.addList()} /></p>
      List:
      {this.state.list}
      </div>
    )
}

}

export default App;

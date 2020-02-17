import React from 'react';
import logo from './logo.svg';
import './App.css';

function NameBadge(props) { //functional component
  console.log(props);
  return <p> My name is {props.name}</p> // keep the jsx code on the same line or add parantheses otherwise it will throw an error
}

class App extends React.Component {
  clickHandler = () => {
    alert("clicked!");
    console.log(this);
  }
  render() {
  return ( //must return jsx onClick is for when the logo is clicked it shows an alert
    <div className="App">
      <header className="App-header">
        <div onClick={this.clickHandler}> 
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          wubba lubba dub dub
        </p>
        <NameBadge name="Shanice"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;

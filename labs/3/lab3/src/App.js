import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Card from './components/Card/index.js';

class App extends React.Component {
  render(){
    return (
      <Card content="This is a card!"></Card>
  );
 }
}

export default App;

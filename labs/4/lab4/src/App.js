import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Card from './components/Card/index.js';
//import CardList from './components/CardList/';

class App extends React.Component {
  render(){
    return (
      <div>
      <Card content="This is a card!"></Card>
      
      </div>
  );
 }
}

export default App;

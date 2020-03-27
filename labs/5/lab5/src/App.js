import React from 'react';
import './App.css';
import Card from './components/Card'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {content:"", list: []}
  }
  
  async getServerData() {
    const response = await fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
    
    console.log("Received response from server!")
    console.log(response)
    let obj = await response.json()
    console.log("Processed response as JSON: ", obj)
    this.setState({list:obj.properties.periods})
  }

  componentDidMount() {
    console.log("Component did mount!")
    this.getServerData()
  }
  render() {
    return (
      <div>
        <p>{this.state.content}</p>
        {this.state.list.map((listObject, index) =>
        <Card key={index} title={listObject.name}>
          <h2><p>{listObject.temperature} {listObject.temperatureUnit}</p></h2>
          <p>{listObject.detailedForecast}</p>
          </Card>
        )}
      </div>
    )
  }
}

export default App;

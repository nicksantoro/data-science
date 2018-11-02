import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    eventFraud: [
      {id: 1, event: "party", fraud: "high"},
      {id: 1, event: "concert", fraud: "low"},
      {id: 1, event: "sports", fraud: "medium"}
    ]  
  }

  componentDidMount() {
    console.log("componentdidmount")
    axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './List';

const justGershThings = require('./gersh-faves.js').justGershThings;
console.log("Gersh", justGershThings);

class App extends Component {

  render() {
    return (
      <div className="App">
        <List list={justGershThings} />
      </div>
    );
  }
}

export default App;

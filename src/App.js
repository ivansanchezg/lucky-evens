import React, { Component } from 'react';
import LuckyEven from './LuckyEven';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LuckyEven/>
          <LuckyEven title="Lucky Evens - 100" sides="100"/>
        </header>
      </div>
    );
  }
}

export default App;

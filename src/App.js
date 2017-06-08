import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

  }

  render() {

    setTimeout(()=>{
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
    return (
      <div className="App">
        <h1>Since component rendered: {this.state.count}</h1>
      </div>
    );
  }
}

export default App;

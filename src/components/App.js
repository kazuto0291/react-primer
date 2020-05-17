import React from 'react';
import './App.css';
class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      hoge: 'state1',
      fuga: 'state2'
    };
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Hello World</h1>
        <p>こんにちは世界！</p>
      </div>
    );
  }
}


export default App;

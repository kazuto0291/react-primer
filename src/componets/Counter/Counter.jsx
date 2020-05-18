import React from 'react';
import Button from '../Button/Button'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }

  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decremnt() {
    this.setState({
      count: this.state.count - 1
    });
  }


  render() {
    return (
      <div>
        <p>{ this.state.count }</p>
        <span onClick={() => {this.increment()}}>
          <Button>インクリメント</Button>
        </span>
        <span onClick={() => {this.decremnt()}}>
         <Button>デクリメント</Button>
        </span>
      </div>
    )
  }
}

export default Counter;
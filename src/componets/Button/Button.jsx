import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.value = 123;
  }
  render() {
    return (
      <span className='Button-container'>
        {this.props.children}
      </span>
    );
  }
};

export default Button;
import React from 'react';
import './Button1.css'
class Button1 extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(event) {
    console.log('ButtonコンポーネントのonClickHandler実行');
    this.props.onClickHandler('なにかしらのデータ from Button');
  }

  render() {
    return (
      <span
        className="Button-container"
        onClick={this.onClickHandler}
      >
        {this.props.children}
      </span>
    )
  }
}






export default Button1
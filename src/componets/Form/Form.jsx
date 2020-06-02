import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      lastName: '',
      firstName: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const value = event.target.value;
    console.log(field, ' : ', value);
    this.setState({
      [field]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const fullName =`${this.state.lastaName} ${this.state.firstName}`;
    window.alert(`姓名：${fullName}`);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          姓：
          <input
            type="text"
            name="lastName"
            value={this.state.lastaName}
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <label>
          名：
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </label><br/>
        <input type="submit" value="submit" />
      </form>
    );
  }
}



export default Form;
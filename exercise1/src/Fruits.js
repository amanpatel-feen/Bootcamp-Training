import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Fruits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  handleButtonClick = () => {
    this.form.reset()
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input  onChange={this.handleSubmit} />
        </label>
        <button onClick={this.handleButtonClick}>Submit</button>
      </form>
        <p>{this.handleSubmit}</p>
      </div>
    
    );
  }
}

export default Fruits;

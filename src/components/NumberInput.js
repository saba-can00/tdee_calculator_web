import React from "react";
import styled from "styled-components";

export class NumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.initialValue };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          type="number"
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}

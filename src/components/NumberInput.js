import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  text-align: left;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 12px;
`;

const Input = styled.input`
  border: 2px solid rgba(73, 72, 72, 0.8);
  box-sizing: border-box;
  width: 184px;
  height: 36px;
  font-family: "M PLUS 1p", sans-serif;
  font-size: 20px;
  font-weight: 600;
`;

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
      <Container>
        <Label>{this.props.label}</Label>
        <Input
          type="number"
          value={this.state.value}
          onChange={this.handleChange}
        ></Input>
      </Container>
    );
  }
}

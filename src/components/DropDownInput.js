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

const Select = styled.select`
  font-size: 16px;
  height: 36px;
  padding-left: 4px;
  border: 1px solid rgba(73, 72, 72, 0.8);
`;

export class DropDownInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const selections = this.props.selections.map((selection) => {
      return (
        <option key={selection.value} value={selection.value}>
          {selection.label}
        </option>
      );
    });

    return (
      <Container>
        <Label>{this.props.label}</Label>
        <Select
          name={this.props.name}
          id={this.props.id}
          value={this.props.value}
          onChange={this.handleChange}
        >
          {selections}
        </Select>
      </Container>
    );
  }
}

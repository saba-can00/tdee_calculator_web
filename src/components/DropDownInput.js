import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
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
  render() {
    const selections = this.props.selections;
    return (
      <Container>
        <Label>{this.props.label}</Label>
        <Select name={this.props.name} id={this.props.id}>
          {selections.map((selection) => {
            <option value={selection.value}>{selection.label}</option>;
          })}
        </Select>
      </Container>
    );
  }
}

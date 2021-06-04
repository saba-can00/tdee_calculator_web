import React from "react";
import styled from "styled-components";

const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Selection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 24px;
`;

const RadioButtonGroupLabel = styled.label`
  text-align: left;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 12px;
`;

const SelectionLabel = styled.label`
  text-align: left;
  font-size: 24px;
  line-height: 36px;
  cursor: pointer;
  &:before {
    content: "";
    border-radius: 50%;
    border: 2px solid #6ed085;
    width: 20px;
    height: 20px;
    display: inline-flex;
    margin-right: 4px;
    vertical-align: middle;
  }
`;

const ButtonInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 50%;
  position: relative;
  left: 17px;
  width: 10px;
  height: 10px;
  margin: 0;
  background: #6ed085;
  opacity: 0;
  transition: opacity 0.2s ease;
  cursor: pointer;
  &:checked {
    opacity: 1;
  }
`;

export class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    //return index by event.target.value
    this.props.onChange(event.target.value);
  }

  render() {
    const selections = this.props.selections.map((selection, index) => {
      return (
        <Selection key={selection.id}>
          <ButtonInput
            type="radio"
            id={selection.id}
            name={this.props.name}
            value={index}
            checked={this.props.selectedOption.value === selection.value}
            onChange={this.onChange}
          />
          <SelectionLabel htmlFor={selection.value}>
            {selection.label}
          </SelectionLabel>
        </Selection>
      );
    });
    return (
      <RadioButtonContainer>
        <RadioButtonGroupLabel>{this.props.label}</RadioButtonGroupLabel>
        <SelectionContainer>{selections}</SelectionContainer>
      </RadioButtonContainer>
    );
  }
}

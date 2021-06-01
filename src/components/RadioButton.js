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
  &:checked {
    opacity: 1;
  }
`;

export class RadioButton extends React.Component {
  render() {
    return (
      <RadioButtonContainer>
        <RadioButtonGroupLabel>{this.props.label}</RadioButtonGroupLabel>
        <SelectionContainer>
          <Selection>
            <ButtonInput
              checked
              type="radio"
              id="men"
              name={this.props.name}
              value="men"
            />
            <SelectionLabel htmlFor="men">
              {this.props.selection}
            </SelectionLabel>
          </Selection>
          <Selection>
            <ButtonInput
              type="radio"
              id="women"
              name={this.props.name}
              value="women"
            />
            <SelectionLabel htmlFor="women">
              {this.props.selection2}
            </SelectionLabel>
          </Selection>
        </SelectionContainer>
      </RadioButtonContainer>
    );
  }
}

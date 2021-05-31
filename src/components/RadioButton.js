import React from "react";
import styled from "styled-components";

const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
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
`;

export class RadioButton extends React.Component {
  render() {
    return (
      <RadioButtonContainer>
        <RadioButtonGroupLabel>{this.props.label}</RadioButtonGroupLabel>
        <SelectionContainer>
          <Selection>
            <input type="radio" id="men" name={this.props.name} value="men" />
            <SelectionLabel htmlFor="men">
              {this.props.selection}
            </SelectionLabel>
          </Selection>
          <Selection>
            <input
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

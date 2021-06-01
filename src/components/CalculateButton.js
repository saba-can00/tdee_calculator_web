import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 56px;
  color: #6ed085;
  background: #fff;
  border: 2px solid #6ed085;
  border-radius: 4px;
  font-weight: 500;
  font-size: 24px;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    color: #fff;
    background: #6ed085;
  }
`;

export class CalculateButton extends React.Component {
  render() {
    return (
      <Button className={this.props.className} type="button">
        {this.props.label}
      </Button>
    );
  }
}

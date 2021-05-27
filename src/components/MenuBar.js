import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  height: 48px;
  line-height: 48px;
  background: #6ed085;
  display: flex;
  justify-content: space-evenly;
`;

const Menu = styled.span`
  color: #ffffff;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
`;

export class MenuBar extends React.Component {
  render() {
    return (
      <Bar>
        <Menu>TDEEを計算する</Menu>
        <Menu>TDEEって何?</Menu>
      </Bar>
    );
  }
}

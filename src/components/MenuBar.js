import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  height: 48px;
  line-height: 48px;
  background: #6ed085;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Menu = styled.a`
  margin: 0 auto;
  color: #ffffff;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  cursor: pointer;
  text-decoration: none;
`;

export class MenuBar extends React.Component {
  render() {
    return (
      <Bar>
        <Menu href="/">TDEEを計算する</Menu>
        <Menu href="/faq">TDEEって何?</Menu>
      </Bar>
    );
  }
}

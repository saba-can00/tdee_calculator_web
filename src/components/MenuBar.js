import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  height: 48px;
  line-height: 48px;
  background: #6ed085;
  display: flex;
`;

const Menu = styled.a`
  margin: 0 auto;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  @media (min-width: 769px) {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 425px) {
    font-size: 16px;
  }
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

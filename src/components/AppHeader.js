import React from "react";
import styled from "styled-components";

const HeaderTitle = styled.div`
  height: 48px;
  font-weight: 300;
  font-size: 36px;
  text-align: center;
  color: #000000;
  margin: 16px auto;
`;

export class AppHeader extends React.Component {
  render(h) {
    return (
      <header>
        <HeaderTitle>TDEE 計算ツール</HeaderTitle>
      </header>
    );
  }
}

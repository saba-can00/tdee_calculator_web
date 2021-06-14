import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export class Footer extends React.Component {
  render(props) {
    return (
      <FooterContainer>
        <FooterMenuGroup>
          <Link>利用規約</Link>
        </FooterMenuGroup>
        <TradeMark>
          &copy; 2021 <a href="https://github.com/saba-can00">saba-can00</a>
        </TradeMark>
      </FooterContainer>
    );
  }
}

const FooterContainer = styled.footer`
  background-color: #333333;
  color: #fff;
  width: 100%;
  height: 80px;
  font-size: 14px;
  margin-top: auto;
  & a {
    color: #fff;
    text-decoration: none;
  }
`;

const FooterMenuGroup = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  padding-left: 5%;
  align-items: center;
`;

const TradeMark = styled.p`
  text-align: center;
  height: 20px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

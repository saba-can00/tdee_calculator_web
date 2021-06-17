import React from "react";
import styled from "styled-components";

export class PageTitle extends React.Component {
  render() {
    return <Title className={this.props.className}>{this.props.title}</Title>;
  }
}

const Title = styled.h1`
  font-size: 32px;
  font-family: "M PLUS 1p", sans-serif;
  font-weight: 300;
`;

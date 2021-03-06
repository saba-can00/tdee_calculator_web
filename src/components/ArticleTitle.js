import React from "react";
import styled from "styled-components";

export class ArticleTitle extends React.Component {
  render() {
    return <Title className={this.props.className}>{this.props.title}</Title>;
  }
}

const Title = styled.h2`
  font-size: 24px;
  font-family: "M PLUS 1p", sans-serif;
  font-weight: 300;
`;

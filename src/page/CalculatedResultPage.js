import React from "react";
import styled from "styled-components";

export class CalculatedResultPage extends React.Component {
  render() {
    return <Form>{this.props.location.state.calorie}</Form>;
  }
}

const Form = styled.main`
  display: flex;
  margin: 24px auto;
`;

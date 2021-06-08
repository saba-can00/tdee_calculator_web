import React from "react";
import styled from "styled-components";

export class CalculatedResultPage extends React.Component {
  render() {
    return (
      <Form>
        <ExplanationOfCalorie>
          体重を維持するための摂取カロリーは、
          <Calorie>{this.props.location.state.calorie} kcal</Calorie>
          です
        </ExplanationOfCalorie>
        <SubText>
          減量 / 増量 をする場合は
          <RangeOfCalorie>± 200 ~ 300 kcal</RangeOfCalorie>{" "}
          を目安に摂取しましょう
        </SubText>
      </Form>
    );
  }
}

const Form = styled.main`
  display: flex;
  margin: 10% 20%;
  flex-direction: column;
`;

const ExplanationOfCalorie = styled.p`
  color: #000;
  font-weight: 300;
  font-size: 32px;
  margin: 0;
`;

const Calorie = styled.span`
  color: #d06eb9;
  font-size: 52px;
`;

const SubText = styled.p`
  color: #000;
  font-weight: 300;
  font-size: 24px;
  margin: 0;
`;

const RangeOfCalorie = styled.span`
  color: #d06eb9;
`;

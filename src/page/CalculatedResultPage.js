import React from "react";
import styled from "styled-components";
import { MainActionButton } from "../components/MainActionButton";
import { Link } from "react-router-dom";

export class CalculatedResultPage extends React.Component {
  render() {
    return (
      <Form>
        <ExplanationOfCalorie>
          体重を維持するための摂取カロリーは、
          <br />
          <Calorie>{this.props.location.state.calorie} kcal</Calorie>
          です
        </ExplanationOfCalorie>
        <SubText>
          減量 / 増量 をする場合は
          <RangeOfCalorie>± 200 ~ 300 kcal</RangeOfCalorie>
          を目安に摂取しましょう
        </SubText>
        <LinkToHome to="/">
          <BackButton label="戻る" />
        </LinkToHome>
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
  margin-top: 0;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

const Calorie = styled.span`
  color: #d06eb9;
  @media (min-width: 768px) {
    font-size: 48px;
  }
  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

const SubText = styled.p`
  color: #000;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

const RangeOfCalorie = styled.span`
  color: #d06eb9;
`;

const BackButton = styled(MainActionButton).attrs((props) => ({
  label: props.label,
}))`
  width: 100%;
`;

const LinkToHome = styled(Link).attrs((props) => ({
  to: props.to,
}))`
  margin-top: 6%;
`;

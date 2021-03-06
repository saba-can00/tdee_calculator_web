import React from "react";
import styled from "styled-components";
import { NumberInput } from "../components/NumberInput";
import { RadioButton } from "../components/RadioButton";
import { DropDownInput } from "../components/DropDownInput";
import { MainActionButton } from "../components/MainActionButton";
import { calcIntakeCalorie } from "../domain/services/HarrisBenedictCalculator";
import {
  ACTIVITY_LEVEL,
  LEVEL_LITTLE,
} from "../domain/entity/ActivityLevelConstants";
import { SEX, MEN } from "../domain/entity/SexConstants";

export class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
      weight: 0,
      height: 0,
      sex: MEN,
      activityLevel: LEVEL_LITTLE.value,
    };
    this.inputAge = this.inputAge.bind(this);
    this.inputWeight = this.inputWeight.bind(this);
    this.inputHeight = this.inputHeight.bind(this);
    this.inputSex = this.inputSex.bind(this);
    this.inputActivityLevel = this.inputActivityLevel.bind(this);
    this.inputAge = this.inputAge.bind(this);
    this.calcCalorie = this.calcCalorie.bind(this);
  }

  inputAge(age) {
    this.setState({ age: age });
  }
  inputWeight(weight) {
    this.setState({ weight: weight });
  }
  inputHeight(height) {
    this.setState({ height: height });
  }
  inputSex(index) {
    this.setState({ sex: SEX[index] });
  }
  inputActivityLevel(activityLevel) {
    this.setState({ activityLevel: activityLevel });
  }
  calcCalorie() {
    const calorie = calcIntakeCalorie(
      this.state.age,
      this.state.weight,
      this.state.height,
      this.state.sex.value,
      this.state.activityLevel
    );
    console.log(`calorie=${calorie}`);
    this.props.history.push({
      pathname: "/result",
      state: {
        calorie: calorie,
      },
    });
  }

  render() {
    return (
      <Form>
        <LeftCell>
          <NumberInput
            label="年齢"
            value={this.state.age}
            onChange={this.inputAge}
          />
        </LeftCell>
        <RightCell>
          <RadioButton
            label="性別"
            name="sex"
            selectedOption={this.state.sex}
            selections={SEX}
            onChange={this.inputSex}
          />
        </RightCell>
        <LeftCell>
          <NumberInput
            label="体重"
            value={this.state.weight}
            onChange={this.inputWeight}
          />
        </LeftCell>
        <RightCell>
          <NumberInput
            label="身長"
            value={this.state.height}
            onChange={this.inputHeight}
          />
        </RightCell>
        <LeftCell>
          <DropDownInput
            label="運動レベル"
            name="activityLevel"
            value={this.state.activityLevel}
            onChange={this.inputActivityLevel}
            selections={ACTIVITY_LEVEL}
          />
        </LeftCell>
        <StyledButton label="計算する" onClick={this.calcCalorie} />
      </Form>
    );
  }
}

const Form = styled.main`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 24px auto;
  }
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 426px) and (max-width: 1023px) {
    margin: 24px 25%;
  }
  @media (max-width: 425px) {
    margin: 24px 5%;
  }
`;

const LeftCell = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  margin-bottom: 24px;
`;

const RightCell = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  margin-bottom: 24px;
`;

const StyledButton = styled(MainActionButton).attrs((props) => ({
  label: props.label,
}))`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
  margin-top: 6%;
`;

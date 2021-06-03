import React from "react";
import styled from "styled-components";
import { NumberInput } from "./NumberInput";
import { RadioButton } from "./RadioButton";
import { DropDownInput } from "./DropDownInput";
import { CalculateButton } from "./CalculateButton";
import { calcIntakeCalorie } from "../domain/HarrisBenedictCalculator";

const Form = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 76%;
  margin: 24px auto;
`;

const GridCell = styled.div`
  display: block;
  margin: 0 20% 24px;
`;

const StyledButton = styled(CalculateButton).attrs((props) => ({
  label: props.label,
}))`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  margin: 64px 10% 24px;
`;

export class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
      weight: 0,
      height: 0,
      sex: "men",
      activityLevel: 1,
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
  inputSex(sex) {
    this.setState({ sex: sex });
  }
  inputActivityLevel(activityLevel) {
    this.setState({ activityLevel: activityLevel });
  }
  calcCalorie() {
    const calorie = calcIntakeCalorie(
      this.state.age,
      this.state.weight,
      this.state.height,
      this.state.sex,
      this.state.activityLevel
    );
    console.log(`calorie=${calorie}`);
    return calorie;
  }

  render() {
    return (
      <Form>
        <GridCell>
          <NumberInput
            label="年齢"
            value={this.state.age}
            onChange={this.inputAge}
          />
        </GridCell>
        <GridCell>
          <RadioButton
            label="性別"
            name="sex"
            selection="男性"
            selection2="女性"
            onChange={this.inputSex}
          />
        </GridCell>
        <GridCell>
          <NumberInput
            label="体重"
            value={this.state.weight}
            onChange={this.inputWeight}
          />
        </GridCell>
        <GridCell>
          <NumberInput
            label="身長"
            value={this.state.height}
            onChange={this.inputHeight}
          />
        </GridCell>
        <GridCell>
          <DropDownInput
            label="運動レベル"
            name="activityLevel"
            onChange={this.inputActivityLevel}
          />
        </GridCell>
        <StyledButton label="計算する" onClick={this.calcCalorie} />
      </Form>
    );
  }
}

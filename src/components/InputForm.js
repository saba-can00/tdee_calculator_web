import React from "react";
import styled from "styled-components";
import { NumberInput } from "./NumberInput";
import { RadioButton } from "./RadioButton";
import { DropDownInput } from "./DropDownInput";
import { CalculateButton } from "./CalculateButton";

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
  render() {
    return (
      <Form>
        <GridCell>
          <NumberInput label="年齢" />
        </GridCell>
        <GridCell>
          <RadioButton
            label="性別"
            name="sex"
            selection="男性"
            selection2="女性"
          />
        </GridCell>
        <GridCell>
          <NumberInput label="体重" />
        </GridCell>
        <GridCell>
          <NumberInput label="身長" />
        </GridCell>
        <GridCell>
          <DropDownInput label="運動レベル" name="activityLevel" />
        </GridCell>
        <StyledButton label="計算する" />
      </Form>
    );
  }
}

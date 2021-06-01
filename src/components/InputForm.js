import React from "react";
import styled from "styled-components";
import { NumberInput } from "./NumberInput";
import { RadioButton } from "./RadioButton";
import { DropDownInput } from "./DropDownInput";

const Form = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 76%;
  margin: 24px auto;
`;

const GridCell = styled.div`
  display: block;
  margin: 0 20% 24px;
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
      </Form>
    );
  }
}

import React from "react";
import styled from "styled-components";
import { NumberInput } from "./NumberInput";
import { RadioButton } from "./RadioButton";

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px auto;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export class InputForm extends React.Component {
  render() {
    return (
      <Form>
        <InputRow>
          <NumberInput label="年齢" />
          <RadioButton
            label="性別"
            name="sex"
            selection="男性"
            selection2="女性"
          />
        </InputRow>
      </Form>
    );
  }
}

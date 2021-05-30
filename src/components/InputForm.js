import React from "react";
import styled from "styled-components";
import { NumberInput } from "./NumberInput";

const Form = styled.div`
  display: flex;
  flex-direction: column;
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
          <NumberInput label="年齢" />
        </InputRow>
      </Form>
    );
  }
}

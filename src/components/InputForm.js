import React from "react";
import styled from "styled-components";
import { NumberInput } from "./NumberInput";

const Form = styled.div`
  display: flex;
`;

export class InputForm extends React.Component {
  render() {
    return (
      <Form>
        <NumberInput label="年齢" />
      </Form>
    );
  }
}

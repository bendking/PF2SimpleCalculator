import React from "react";

import {
  InputGroup,
  InputLeftAddon,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

type StrikeInputProps = {
  inputName: string;
  value: number | string;
  handleValueChange: (valueAsString: string, valueAsNumber: number) => void;
};

export function StrikeInput({inputName, value, handleValueChange}: StrikeInputProps) {
  return (
    <InputGroup size="md">
      <InputLeftAddon minW="8em" children={inputName} />
      <NumberInput type="number" value={value} onChange={handleValueChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </InputGroup>
  );
}

import React from "react";
import { Center, CloseButton, IconButton, Input, SimpleGrid } from "@chakra-ui/react";

import { SimpleStrike } from "./SimpleStrike";
import { AddIcon } from "@chakra-ui/icons";

type SimpleRoutineProps = {
  routineName: string;
  removeRoutine: Function;
  renameRoutine: Function;
  strikes: Record<string, number>;
  setStrike: Function;
  addStrike: Function;
  removeStrike: Function;
};

export function SimpleRoutine({
  routineName,
  removeRoutine,
  renameRoutine,
  strikes,
  setStrike,
  addStrike,
  removeStrike,
}: SimpleRoutineProps) {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    renameRoutine(routineName, event.target.value);
  };

  const strikesList = Object.keys(strikes).map((strikeName) => (
    <SimpleStrike
      key={strikeName}
      routineName={routineName}
      strikeName={strikeName}
      setStrike={setStrike}
      removeStrike={removeStrike}
    />
  ));

  const gridColumns = [1, 1, 3];
  const gridRows = [1, 1, 3];

  // let fillerBoxes;
  // switch (strikesList.length % 3) {
  //   case 0:
  //     fillerBoxes = 2;
  //     break;
  //   case 1:
  //     fillerBoxes = 1;
  //     break;
  //   case 2:
  //     fillerBoxes = 0;
  //     break;
  // }

  // const fillerBoxesList = [...Array(fillerBoxes)].map(_ => (
  //   <Box />
  // ))

  return (
    <SimpleGrid
      spacing={4}
      columns={gridColumns}
      rows={gridRows}
      borderWidth="1px"
      borderRadius="12px"
      padding="12px"
    >
      <Input
        placeholder="Routine name"
        gridColumnStart={2}
        defaultValue={routineName}
        onBlur={handleNameChange}
        border="0px"
        textAlign="center"
        fontSize="3xl"
        _focus={{border: "none", color: "blue.400"}}
        _hover={{color: "blue.400"}}

      />
      <CloseButton justifySelf="end" onClick={() => removeRoutine(routineName)} />
      {strikesList}
      <Center>
        <IconButton
          aria-label="Add strike"
          onClick={() => addStrike(routineName)}
          icon={<AddIcon />}
          colorScheme="blue"
        />
      </Center>
    </SimpleGrid>
  );
}

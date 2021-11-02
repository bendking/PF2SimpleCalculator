import React, { useState, useCallback } from "react";

import { VStack, Center, Box, Stack, Text } from "@chakra-ui/layout";
import { Button, Stat, StatGroup, StatLabel, StatNumber } from "@chakra-ui/react";

import { ACByLevel } from "./info_drawers/ACByLevel";
import { AttackByLevel } from "./info_drawers/AttackByLevel";
import { SimpleRoutine } from "./SimpleRoutine";

import { renameObjectKey } from "../utils/util_functions";

export function SimpleCalculator() {
  const [routines, setRoutines] = useState<Record<string, Record<string, number>>>({
    'Routine 1': { strike_1: 0 },
  });
  const [routineCounter, setRoutineCounter] = useState(1);
  const [strikeCounter, setStrikeCounter] = useState(1);

  console.log(routines);
  console.log(`Routine counter: ${routineCounter}`);
  console.log(`Strike counter: ${strikeCounter}`);

  const incrementRoutineCounter = () => {
    setRoutineCounter((prevCounter) => prevCounter + 1);
  };

  const incrementStrikeCounter = () => {
    setStrikeCounter((prevCounter) => prevCounter + 1);
  };

  // TODO: doesn't need to be memoized
  const setRoutine = useCallback((routineName: string, routineValue: Record<string, number>) => {
    setRoutines((prevRoutines) => ({
      ...prevRoutines,
      [routineName]: routineValue,
    }));
  }, []);

  const addRoutine = () => {
    setRoutine(`Routine ${routineCounter + 1}`, { [`strike_${strikeCounter}`]: 0 });
    incrementRoutineCounter();
  };

  const removeRoutine = useCallback((routineName: string) => {
    setRoutines((prevRoutines) => {
      const { [routineName]: removed, ...newRoutines } = prevRoutines;
      return newRoutines;
    });
  }, []);

  const renameRoutine = useCallback((oldRoutineName: string, newRoutineName: string) => {
    setRoutines((prevRoutines) => renameObjectKey(prevRoutines, oldRoutineName, newRoutineName));
  }, []);

  const setStrike = useCallback((routineName: string, strikeName: string, strikeValue: number = 0) => {
    console.log("Entered setStrike");
    setRoutines((prevRoutines) => ({
      ...prevRoutines,
      [routineName]: {
        ...prevRoutines[routineName],
        [strikeName]: strikeValue,
      },
    }));
  }, []);

  const addStrike = useCallback(
    (routineName: string) => {
      setStrike(routineName, `strike_${strikeCounter + 1}`);
      incrementStrikeCounter();
    },
    [setStrike, strikeCounter]
  );

  const removeStrike = useCallback((routineName: string, strikeName: string) => {
    setRoutines((prevRoutines) => {
      const { [routineName]: routine } = prevRoutines;
      const { [strikeName]: removed, ...rest } = routine;

      const newRoutines = {
        ...prevRoutines,
        [routineName]: rest,
      };

      return newRoutines;
    });
  }, []);

  const routinesDamage = Object.entries(routines).map(([routineName, strikes]) => [
    routineName,
    Object.values(strikes).reduce((a, b) => a + b, 0),
  ]);

  const routinesDamageList = routinesDamage.map(([routineName, damage], i) => (
    <Stat padding="15px">
      <StatLabel size="sm">
        <Text fontSize="3vh" whiteSpace="nowrap">{routineName || `Routine ${i+1}`}</Text>
      </StatLabel>
      <StatNumber>
        <Text fontSize="3vh">{damage.toFixed(2)}</Text>
      </StatNumber>
    </Stat>
  ));

  const routineList = Object.entries(routines).map(([routineName, strikes]) => (
    <SimpleRoutine
      key={routineName}
      routineName={routineName}
      removeRoutine={removeRoutine}
      renameRoutine={renameRoutine}
      strikes={strikes}
      setStrike={setStrike}
      addStrike={addStrike}
      removeStrike={removeStrike}
    />
  ));

  return (
    <>
      <Box position="fixed" left={0}>
        <Stack>
          <ACByLevel />
          <AttackByLevel />
        </Stack>
      </Box>

      <Center>
        <StatGroup>{routinesDamageList}</StatGroup>
      </Center>

      <VStack spacing={5} mt="4vh">
        {routineList}
        <Button onClick={addRoutine} colorScheme="blue">
          Add Routine
        </Button>
      </VStack>
    </>
  );
}

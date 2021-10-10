import React, { useState, useCallback } from "react";

import { SimpleGrid, VStack, HStack, Center } from "@chakra-ui/layout";
import { Stat, StatLabel, StatNumber, IconButton, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { SimpleStrike } from "./SimpleStrike";

export function SimpleCalculator() {
  const [strikes, setStrikes] = useState<Record<string, number>>({ strike_1: 0 });
  const [strikeCounter, setStrikeCounter] = useState(1);

  //  used to create, update and remove strikes from the strikesDamage object
  const setStrike = useCallback(
    (strikeName: string, strikeValue: number) => {
      setStrikes((prev) => ({
        ...prev,
        [strikeName]: strikeValue,
      }));
    },
    [setStrikes]
  );

  const removeStrike = useCallback((strikeName: string) => {
    setStrikes((prevStrikesDamage) => {
      const { [strikeName]: removed, ...rest } = prevStrikesDamage;
      return rest;
    });
  }, []);

  const addStrike = () => {
    setStrike(`strike_${strikeCounter + 1}`, 0);
    setStrikeCounter((prevCounter) => prevCounter + 1);
  };

  console.log(strikes);

  const overallDamage = Object.values(strikes).reduce((a, b) => a + b, 0);

  const strikesList = Object.keys(strikes).map((strike) => (
    <SimpleStrike strikeName={strike} setStrike={setStrike} removeStrike={removeStrike} />
  ));

  return (
    <VStack spacing={30}>
      <Stat>
        <StatLabel>
          <Text fontSize="2vh">Overall Damage</Text>
        </StatLabel>
        <Center>
          <StatNumber>
            <Text fontSize="4vh">{overallDamage.toFixed(3)}</Text>
          </StatNumber>
        </Center>
      </Stat>
      <SimpleGrid spacing={4} columns={[1, 1, 3]} rows={[1, 1, 3]}>
        {strikesList}
        <Center>
          <IconButton aria-label="Add strike" onClick={addStrike} icon={<AddIcon />} colorScheme="blue" />
        </Center>
      </SimpleGrid>
    </VStack>
  );
}

// const removeStrike = (strikeName: string) => (
// 	useCallback(
// 		(strikeName: string) => {
// 			setStrikesDamage((prev) => ({
// 				...prev,
// 				[strikeName]: undefined,
// 			}));
// 		},
// 		[],
// 	)
// )

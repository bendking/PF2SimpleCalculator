import React, { useEffect } from "react";
import {
  Grid,
  VStack,
  HStack,
  Center,
  Heading,
  Box,
  Badge,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

import { useStrike } from "../hooks/useStrike";
import { StrikeInput } from "./StrikeInput"

type SimpleStrikeProps = {
  strikeName: string;
  setStrike: Function;
  removeStrike: Function;
};

export function SimpleStrike({ strikeName, setStrike, removeStrike }: SimpleStrikeProps) {
  const [
    result,
    bonus,
    MAP,
    AC,
    die,
    dieMultiplier,
    modifier,
    handleBonusChange,
    handleMAPChange,
    handleACChange,
    handleDieChange,
    handleDieMultiplierChange,
    handleModifierChange,
  ] = useStrike();

  useEffect(() => {
    // Update parent component of current average damage
    setStrike(strikeName, result);
  }, [setStrike, strikeName, result]);

  return (
    <Box p="6" minW="md" maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Grid>
        <IconButton
          onClick={() => removeStrike(strikeName)}
          icon={<CloseIcon />}
          aria-label="Remove strike"
          size="xs"
          colorScheme="blue"
          justifySelf="flex-end"
        />
        <HStack spacing={3}>
          <VStack spacing={3} maxW="10em">
            <Heading as="h4" size="md">
              Attack
            </Heading>
            <StrikeInput inputName="Attack Bonus" value={bonus} handleValueChange={handleBonusChange} />
            <StrikeInput inputName="MAP" value={MAP} handleValueChange={handleMAPChange} />
            <StrikeInput inputName="AC" value={AC} handleValueChange={handleACChange} />
          </VStack>
          <Divider orientation="vertical" />
          <VStack spacing={3} maxW="10em">
            <Heading as="h4" size="md">
              Damage
            </Heading>
            <StrikeInput inputName="Die Size" value={die} handleValueChange={handleDieChange} />
            <StrikeInput inputName="Die Multiplier" value={dieMultiplier} handleValueChange={handleDieMultiplierChange} />
            <StrikeInput inputName="Modifiers" value={modifier} handleValueChange={handleModifierChange} />
          </VStack>
        </HStack>
        <Badge borderRadius="full" fontSize="0.8em" p="2" mt="20px" colorScheme="blue">
          <Center>Average Damage: {result.toFixed(3)}</Center>
        </Badge>
      </Grid>
    </Box>
  );
}

import React, { useEffect } from "react";
import {
  Grid,
  VStack,
  HStack,
  Center,
  Heading,
  Text,
  Input,
  Box,
  InputGroup,
  InputLeftAddon,
  Badge,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

import { useStrike } from "./useStrike";

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
          <VStack spacing={3} maxW="9em">
            <Heading as="h4" size="md">
              Attack
            </Heading>
            <InputGroup size="md">
              <InputLeftAddon minW="8em" children="Attack Bonus" />
              <Input type="number" value={bonus} onChange={handleBonusChange} />
            </InputGroup>
            <InputGroup size="md">
              <InputLeftAddon minW="8em" children="MAP" />
              <Input type="number" value={MAP} onChange={handleMAPChange} />
            </InputGroup>
            <InputGroup size="md">
              <InputLeftAddon minW="8em" children="AC" />
              <Input type="number" value={AC} onChange={handleACChange} />
            </InputGroup>
          </VStack>
          <Divider orientation="vertical" />
          <VStack spacing={3} maxW="9em">
            <Heading as="h4" size="md">
              Damage
            </Heading>
            <InputGroup size="md">
              <InputLeftAddon minW="8em" children="Die Size" />
              <Input type="number" value={die} onChange={handleDieChange} />
            </InputGroup>
            <InputGroup size="md">
              <InputLeftAddon minW="8em" children="Die Multiplier" />
              <Input type="number" value={dieMultiplier} onChange={handleDieMultiplierChange} />
            </InputGroup>
            <InputGroup size="md">
              <InputLeftAddon minW="8em" children="Modifiers" />
              <Input type="number" value={modifier} onChange={handleModifierChange} />
            </InputGroup>
          </VStack>
        </HStack>
        <Badge borderRadius="full" fontSize="0.8em" p="2" mt="20px" colorScheme="blue">
          <Center>Average Damage: {result.toFixed(3)}</Center>
        </Badge>
      </Grid>
    </Box>
  );
}

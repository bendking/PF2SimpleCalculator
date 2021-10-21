import * as React from "react";

import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";

import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import { SimpleCalculator } from "./components/SimpleCalculator";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="xl">
      <Grid p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <SimpleCalculator />
      </Grid>
    </Box>
  </ChakraProvider>
);

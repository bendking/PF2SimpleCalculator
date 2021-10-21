import React from "react";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const generateTableRow = (values: Array<number>) => (
  <Tr>
    {values.map((value) => (
      <Td key={value}>{value}</Td>
    ))}
  </Tr>
);

type InfoDrawerProps = {
  infoName: string;
  tableHeaders: Array<string>;
  tableRows: Array<Array<number>>;
};

export function InfoDrawer({ infoName, tableHeaders, tableRows }: InfoDrawerProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();

  const tableHeader = (
    <Thead>
      <Tr>
        {tableHeaders.map((header) => (
          <Th key={header}>{header}</Th>
        ))}
      </Tr>
    </Thead>
  );

  const tableBody = <Tbody>{tableRows.map((row) => generateTableRow(row))}</Tbody>;

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="blue"
        onClick={onOpen}
        rightIcon={<ArrowForwardIcon />}
        borderRadius="0 30px 30px 0"
      >
        {infoName}
      </Button>
      <Drawer size="md" isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{infoName}</DrawerHeader>

          <DrawerBody>
            <Table size="sm">
              {tableHeader}
              {tableBody}
            </Table>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

const Tweet = () => {
  return (
    <Box p={8} pb={2} borderBottom=".4px solid rgba(0,0,0,.4)">
      <Text>test</Text>
      <HStack justifyContent="flex-end">
        <Text>date</Text>
        <Text>heure</Text>
      </HStack>
    </Box>
  );
};

export default Tweet;

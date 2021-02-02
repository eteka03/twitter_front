import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

const Tweet = ({ text, created_at }) => {
  return (
    <Box p={8} pb={2} borderBottom=".4px solid rgba(0,0,0,.4)">
      <Text>{text}</Text>
      <HStack mt={2} justifyContent="flex-end">
        <Text>{created_at}</Text>
      </HStack>
    </Box>
  );
};

export default Tweet;

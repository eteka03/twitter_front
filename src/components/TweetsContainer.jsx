import { Box } from "@chakra-ui/react";
import React from "react";
import PictureBox from "./PictureBox";
import Tweet from "./Tweet";

const TweetsContainer = () => {
  return (
    <Box
      border=".7px solid #000000"
      w={{ base: "100%", lg: "600px" }}
      h={{ base: "400px", lg: "550px" }}
    >
      <PictureBox imageUrl />
      <Box h="85%" overflowY="scroll">
        {Array.from({ length: 20 }).map((i) => (
          <Tweet />
        ))}
        <Tweet />
      </Box>
    </Box>
  );
};

export default TweetsContainer;

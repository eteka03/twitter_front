import { Box, Img, Text } from "@chakra-ui/react";
import React from "react";

const PictureBox = ({ imageUrl, name }) => {
  return (
    <Box
      alignItems="center"
      display="flex"
      p={5}
      pt={1}
      bgColor="#00aced"
      pb={1}
      w="100%"
      h="20%"
      position="sticky"
    >
      <Img
        borderRadius="full"
        boxSize="8
        60px"
        src={imageUrl}
        alt="profile image"
        title="profile image"
      />
      <Text ml={4}>{name}</Text>
    </Box>
  );
};

export default PictureBox;

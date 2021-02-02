import { Box, Img, Text } from "@chakra-ui/react";
import React from "react";

const PictureBox = ({ imageUrl }) => {
  return (
    <Box display="flex" p={5} w="100%" h="15%" position="sticky">
      <Img src={imageUrl} alt="profile image" title="profile image" />
      <Text ml={4}>nom</Text>
    </Box>
  );
};

export default PictureBox;

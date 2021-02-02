import { Container } from "@chakra-ui/react";
import React, { Children } from "react";

const Layout = ({ children }) => (
  <Container pt="50px" maxW="xl" centerContent>
    {children}
  </Container>
);

export default Layout;

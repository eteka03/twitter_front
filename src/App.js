import logo from "./logo.svg";
import "./App.css";

import Layout from "./components/Layout";
import { Button } from "@chakra-ui/react";
import TweetsContainer from "./components/TweetsContainer";
function App() {
  return (
    <Layout>
      <TweetsContainer />
      <Button fontSize="1.3em" mt={8}>
        Switch
      </Button>
    </Layout>
  );
}

export default App;

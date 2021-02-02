import logo from "./logo.svg";
import "./App.css";

import Layout from "./components/Layout";

import TweetsContainer from "./components/TweetsContainer";
import { Provider } from "react-redux";

import store from "./redux/store";
import CustomButton from "./components/CustomButton";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <TweetsContainer />
        <CustomButton />
      </Layout>
    </Provider>
  );
}

export default App;

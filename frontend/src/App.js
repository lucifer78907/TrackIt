import "./App.scss";
import Features from "./components/Features";
import Header from "./components/Header";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Features />
    </Fragment>
  );
};

export default App;

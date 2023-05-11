import "./App.scss";
import Features from "./components/Features";
import Header from "./components/Header";
import { Fragment } from "react";
import WhyChooseUs from "./components/whyChooseUs";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Features />
      <WhyChooseUs />
    </Fragment>
  );
};

export default App;

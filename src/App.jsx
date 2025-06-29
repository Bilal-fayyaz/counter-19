import React from "react";
import "./global.css";
import Info from "./Info";
import Counter from "./Counter";
import Mobile from "./Mobile";
import Singeluser from "./Singeluser";
// import Inputs from "./controller.inputs/Inputs";
import { Toaster } from "react-hot-toast";
import Multipalinputs from "./Multipalinputs";
import SaidBar from "./SaidBars/SaidBar";

const App = () => {
  return (
    <>
      {/* <Info /> */}
      {/* <Mobile /> */}
      {/* <Counter /> */}
      {/* <Inputs /> */}
      <Toaster />
      {/* <Multipalinputs /> */}
      <SaidBar />
    </>
  );
};

export default App;

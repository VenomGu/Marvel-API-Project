"use client";
import React from "react";
import Characters from "./pages/Characters/Index";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <Characters />
      <GlobalStyle />
    </>
  );
};

export default App;

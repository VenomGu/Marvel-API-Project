"use client";
import React from "react";
import Characters from "./pages/Characters/Index";
import GlobalStyle from "./styles/global";
import Header from "./pages/MarvelH/index";
import CharacterDetailsModal from "./pages/CharacterDetailsModal";

const App: React.FC = () => {
  return (
    <>
      <Characters />
      <GlobalStyle />
    </>
  );
};

export default App;

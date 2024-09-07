import React from "react";
import Characters from "./pages/Characters/Index";
import GlobalStyle from "./styles/global";
const App: React.FC = () => {
  return (
    <>
      <h1>MARVEL APP</h1>
      <Characters />
      <GlobalStyle />
    </>
  );
};

export default App;

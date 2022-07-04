import React from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import theme from "./global/theme";
import GlobalStyle from "./global/styles";

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;

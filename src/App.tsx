import React from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import theme from "./global/theme";
import GlobalStyle from "./global/styles";

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export default App;

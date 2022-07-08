import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./global/theme";
import GlobalStyle from "./global/styles";
import SystemRoutes from "./routes/app.routes";

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SystemRoutes />
    </ThemeProvider>
  );
};

export default App;

import React, { useEffect } from "react";
import { GlobalStyles } from "../GlobalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../Themes";
import { observer } from "mobx-react-lite";
import { ThemeStore } from "../../stores/themeStore";
import { MainWrapper } from "../main-wrapper/MainWrapper";
import AddInput from "../add-input";

const themeSt = new ThemeStore();

const App = observer(() => {
  return (
    <ThemeProvider theme={themeSt.theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <MainWrapper>
        <AddInput />
      </MainWrapper>
    </ThemeProvider>
  );
});

export default App;

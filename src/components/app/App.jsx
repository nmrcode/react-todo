import React, { useEffect } from "react";
import { GlobalStyles } from "../GlobalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../Themes";
import { observer } from "mobx-react-lite";
import { ThemeStore } from "../../stores/themeStore";

const themeSt = new ThemeStore();

const App = observer(() => {
  return (
    <ThemeProvider theme={themeSt.theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <button onClick={themeSt.toggleTheme}>ToggleTheme</button>
      </div>
    </ThemeProvider>
  );
});

export default App;

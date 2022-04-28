import React from "react";
import { GlobalStyles } from "../GlobalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../Themes";
import { observer } from "mobx-react-lite";
import store from "../../stores/themeStore";
import { MainWrapper } from "../main-wrapper/MainWrapper";
import AddInput from "../inputs-form";
import TodoList from "../todo-list";
import { ThemeTogglerIcon } from "../theme-toggler/ThemeTogglerIcon";
import { AiFillBulb, AiOutlineBulb } from "react-icons/ai";

const App = observer(() => {
  return (
    <ThemeProvider theme={store.theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <MainWrapper>
        {/*Инпут для добавления задачи*/}
        <AddInput />
        {/*Лист с тудушками*/}
        <TodoList />
        {/*Тогглер темы*/}
        <ThemeTogglerIcon onClick={store.toggleTheme}>
          {store.theme === "light" ? <AiOutlineBulb /> : <AiFillBulb />}
        </ThemeTogglerIcon>
      </MainWrapper>
    </ThemeProvider>
  );
});

export default App;

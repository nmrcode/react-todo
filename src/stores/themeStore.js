import { makeAutoObservable } from "mobx";
import { injectStores } from "@mobx-devtools/tools";
import todoStore from "./todoStore";

class ThemeStore {
  theme = "dark";

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme = () => {
    this.theme === "light" ? (this.theme = "dark") : (this.theme = "light");
  };
}

const store = new ThemeStore();

export default store;

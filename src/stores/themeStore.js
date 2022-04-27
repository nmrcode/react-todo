import { makeAutoObservable } from "mobx";

class ThemeStore {
  theme = "dark";

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme = () => {
    this.theme === "light" ? (this.theme = "dark") : (this.theme = "light");
  };
}

export { ThemeStore };

import { makeAutoObservable } from "mobx";

class ThemeStore {
  theme = "light";

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme = () => {
    this.theme === "light" ? (this.theme = "dark") : (this.theme = "light");
  };
}

export { ThemeStore };

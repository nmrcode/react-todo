import { action, makeObservable, observable } from "mobx";

class TodoStore {
  todos = [];
  inputValue = "";

  constructor() {
    makeObservable(this, {
      todos: observable,
      inputValue: observable,
      addTodo: action,
    });
  }

  addTodo(title) {
    if (title) {
      const item = {
        id: +Math.random().toFixed(4),
        title,
        completed: false,
      };
      this.todos.push(item);
    }
  }
}

const todoStore = new TodoStore();

export default todoStore;

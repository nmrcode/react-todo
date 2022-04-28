import { action, makeObservable, observable } from "mobx";
import { injectStores } from "@mobx-devtools/tools";

class TodoStore {
  todos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      toggleTodo: action,
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

  removeTodo(id) {
    const newList = this.todos.filter((todo) => todo.id !== id);
    this.todos = newList;
  }

  toggleTodo(id) {
    const index = this.todos.findIndex((item) => item.id === id);
    if (index > -1) {
      this.todos[index].completed = !this.todos[index].completed;
    }
  }
}

const todoStore = new TodoStore();

export default todoStore;

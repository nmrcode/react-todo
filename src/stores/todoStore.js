import { action, makeObservable, observable } from "mobx";

class TodoStore {
  todos = [];
  inputValue = "";

  constructor() {
    makeObservable(this, {
      todos: observable,
      inputValue: observable,
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

  toggleTodo(id) {
    const index = this.todos.findIndex((item) => item.id === id);
    if (index > -1) {
      this.todos[index].completed = !this.todos[index].completed;
    }
  }
}

const todoStore = new TodoStore();

export default todoStore;

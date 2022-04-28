import { action, autorun, makeObservable, observable, reaction } from "mobx";

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
      localStorage.setItem("todoList", JSON.stringify(this.todos));
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

autorun(() => {
  const lsTodo = localStorage.getItem("todoList");
  if (lsTodo) {
    todoStore.todos = JSON.parse(lsTodo);
  }
});
export default todoStore;

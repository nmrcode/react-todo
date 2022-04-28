import { action, autorun, makeObservable, observable, reaction } from "mobx";

class TodoStore {
  todos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      toggleTodo: action,
      removeTodo: action,
    });
  }

  addTodo(title) {
    if (title) {
      const date = new Date();
      const today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

      console.log(today);
      const item = {
        id: +Math.random().toFixed(4),
        title,
        completed: false,
        creationDate: today,
      };
      this.todos.push(item);
      window.localStorage.setItem("todoList", JSON.stringify(this.todos));
    }
  }

  removeTodo(id) {
    const newList = this.todos.filter((todo) => todo.id !== id);
    this.todos = newList;
    window.localStorage.setItem("todoList", JSON.stringify(this.todos));
  }

  toggleTodo(id) {
    const index = this.todos.findIndex((item) => item.id === id);
    if (index > -1) {
      this.todos[index].completed = !this.todos[index].completed;
      window.localStorage.setItem("todoList", JSON.stringify(this.todos));
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

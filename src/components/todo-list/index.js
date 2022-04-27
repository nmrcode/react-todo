import React, { useEffect } from "react";
import { Checkbox, List, ListItem, Title, Wrapper } from "./TodoListEl";
import todoStore from "../../stores/todoStore";
import { observer } from "mobx-react-lite";

const TodoList = observer(() => {
  return (
    <Wrapper>
      <Title>Активные</Title>
      <List>
        {todoStore.todos.length ? (
          todoStore.todos.map((todo) => {
            if (!todo.completed) {
              return (
                <ListItem
                  key={todo.id}
                  onClick={() => todoStore.toggleTodo(todo.id)}
                >
                  <Checkbox
                    checked={todo.completed}
                    onChange={() => todoStore.toggleTodo(todo.id)}
                  />
                  <span>{todo.title}</span>
                </ListItem>
              );
            }
          })
        ) : (
          <ListItem style={{ cursor: "default" }}>
            <span>Еще не было задач </span>
          </ListItem>
        )}
      </List>
      <Title>Выполненные</Title>
      <List>
        {todoStore.todos.map((todo) => {
          if (todo.completed) {
            return (
              <ListItem
                key={todo.id}
                onClick={() => todoStore.toggleTodo(todo.id)}
                checked={todo.completed}
              >
                <Checkbox
                  checked={todo.completed}
                  onChange={() => todoStore.toggleTodo(todo.id)}
                />
                <span>{todo.title}</span>
              </ListItem>
            );
          }
        })}
      </List>
    </Wrapper>
  );
});

export default TodoList;

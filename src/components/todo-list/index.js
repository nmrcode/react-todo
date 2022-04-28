import React, { useEffect } from "react";
import { Checkbox, List, ListItem, Title, Wrapper } from "./TodoListEl";
import todoStore from "../../stores/todoStore";
import { observer } from "mobx-react-lite";
import { AiOutlineDelete } from "react-icons/ai";

const TodoList = observer(() => {
  return (
    <Wrapper>
      <Title>Активные</Title>
      <List>
        {todoStore.todos.length ? (
          todoStore.todos.map((todo) => {
            if (!todo.completed) {
              return (
                <ListItem key={todo.id}>
                  <Checkbox
                    checked={todo.completed}
                    onChange={() => todoStore.toggleTodo(todo.id)}
                  />
                  <span onClick={() => todoStore.toggleTodo(todo.id)}>
                    {todo.title}
                  </span>
                  <AiOutlineDelete
                    onClick={() => todoStore.removeTodo(todo.id)}
                  />
                </ListItem>
              );
            }
          })
        ) : (
          <ListItem>
            <span style={{ cursor: "default" }}>Еще не было задач </span>
          </ListItem>
        )}
      </List>
      <Title>Выполненные</Title>
      <List>
        {todoStore.todos.map((todo) => {
          if (todo.completed) {
            return (
              <ListItem key={todo.id} checked={todo.completed}>
                <Checkbox
                  checked={todo.completed}
                  onChange={() => todoStore.toggleTodo(todo.id)}
                />
                <span onClick={() => todoStore.toggleTodo(todo.id)}>
                  {todo.title}
                </span>{" "}
                <AiOutlineDelete
                  onClick={() => todoStore.removeTodo(todo.id)}
                />
              </ListItem>
            );
          }
        })}
      </List>
    </Wrapper>
  );
});

export default TodoList;

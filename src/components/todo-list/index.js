import React from "react";
import { Checkbox, List, ListItem, Title, Wrapper } from "./TodoListEl";

const TodoList = () => {
  return (
    <Wrapper>
      <Title>Активные</Title>
      <List>
        <ListItem>
          <Checkbox />
          <span>Название</span>
        </ListItem>
        <ListItem>
          <Checkbox />
          <span>Название</span>
        </ListItem>
        <ListItem>
          <Checkbox />
          <span>Название</span>
        </ListItem>
      </List>
      <Title>Выполненные</Title>
      <List>
        <ListItem>
          <Checkbox />
          <span>Название</span>
        </ListItem>
        <ListItem>
          <Checkbox />
          <span>Название</span>
        </ListItem>
        <ListItem>
          <Checkbox />
          <span>Название</span>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default TodoList;

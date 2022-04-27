import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Input, Wrapper } from "./AddInputEl";
import todoStore from "../../stores/todoStore";

const AddInput = () => {
  const [value, setValue] = useState("");
  return (
    <Wrapper>
      <Input
        placeholder="Добавить новую задачу"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            todoStore.addTodo(value);
            setValue("");
          }
        }}
      />
      <AiOutlineArrowRight
        size={25}
        onClick={() => {
          todoStore.addTodo(value);
          setValue("");
        }}
        style={{ cursor: "pointer" }}
      />
    </Wrapper>
  );
};

export default AddInput;

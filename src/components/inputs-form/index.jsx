import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Input, Wrapper } from "./InputsFormEl";
import todoStore from "../../stores/todoStore";

const AddInput = () => {
  const [value, setValue] = useState("");

  return (
    <>
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
        {value.length ? (
          <AiOutlineArrowRight
            size={25}
            onClick={() => {
              todoStore.addTodo(value);
              setValue("");
            }}
            style={{ cursor: "pointer" }}
          />
        ) : null}
      </Wrapper>
    </>
  );
};

export default AddInput;

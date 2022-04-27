import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Input, Wrapper } from "./AddInputEl";

const AddInput = () => {
  return (
    <Wrapper>
      <Input placeholder="Добавить новую задачу" />
      <AiOutlineArrowRight size={25} />
    </Wrapper>
  );
};

export default AddInput;

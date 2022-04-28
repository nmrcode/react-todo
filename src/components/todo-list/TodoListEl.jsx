import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  padding-top: 101px;
  @media (max-width: 768px) {
    padding-top: 30px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 30px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 80px;
  row-gap: 20px;

  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const ListItem = styled(motion.div)`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  word-wrap: anywhere;

  padding: 19px 24px;

  box-shadow: ${({ theme }) => theme.shadowItem};
  border-radius: ${({ theme }) => theme.radii};
  text-decoration: ${(props) => (props.checked ? `line-through` : `none`)};

  div {
    cursor: pointer;
  }

  svg {
    cursor: pointer;
    font-size: 20px;
    margin-left: auto;
    transition: fill 0.2s ease-in-out;

    &:hover {
      fill: tomato;
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 20px 15px;
  }
`;

export const Checkbox = styled.input.attrs({
  type: "checkbox",
})`
  cursor: pointer;

  margin-right: 27px;
  @media (max-width: 768px) {
    margin-right: 10px;
  }
`;

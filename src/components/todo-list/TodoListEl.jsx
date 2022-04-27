import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 101px;
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

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  word-wrap: anywhere;

  padding: 19px 24px;

  box-shadow: ${({ theme }) => theme.shadowItem};
  border-radius: ${({ theme }) => theme.radii};
  text-decoration: ${(props) => (props.checked ? `line-through` : `none`)};
`;

export const Checkbox = styled.input.attrs({
  type: "checkbox",
})`
  margin-right: 27px;
`;

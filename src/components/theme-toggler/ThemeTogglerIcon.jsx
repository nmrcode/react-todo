import styled from "styled-components";

export const ThemeTogglerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  box-shadow: ${({ theme }) => theme.shadowItem};
  border-radius: 50%;
`;

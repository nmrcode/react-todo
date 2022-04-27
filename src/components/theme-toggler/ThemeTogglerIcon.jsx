import styled from "styled-components";

export const ThemeTogglerIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 80px;
  height: 80px;
  box-shadow: ${({ theme }) => theme.shadowItem};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.body};

  svg {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    svg {
      font-size: 25px;
    }
  }
`;

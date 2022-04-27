import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 578px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 10px 0 38px;

  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.radii};
  @media (max-width: 768px) {
    padding: 0 15px;
    font-size: 14px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 59px;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.text};
  margin-right: 20px;

  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.3;
  }
`;

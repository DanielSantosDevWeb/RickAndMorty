import styled from "styled-components";

export const ButtonBTStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.branco} ;
  border-radius: 50px;
  height: 40px;
  width: 40px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  font-size: 1.5em;
  font-weight: ${({ theme }) => theme.colors.blue};
  border: 1px solid black;
`
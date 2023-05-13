import styled from "styled-components";

export const PersonagemStyled = styled.div`

  
  /* border: 1px solid black; */
  padding: 10px 10px 20px 10px;
  border-radius: 0 0 20px 20px;
  box-shadow: 0px 0px 2px yellow;
  background-color: #e3e3e3 ;
  display: flex;
  flex-direction: column;
  gap: 5px;
  

  img {
    width: 100%;
    min-width: 150px;
    max-width: 350px;
    border-radius: 20px;
    box-shadow: 0px 0px 2px black;

  }

  h2 {
    margin: 5px auto;
  }

  div {
    margin: 0px 20px;
    font-weight: 500;
  }

  span {
      font-weight: 700;
    }
`
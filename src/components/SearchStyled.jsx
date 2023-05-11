import styled from "styled-components";

export const SearchStyled = styled.form`
  display: flex;
  

  input {
    width: 85%;
    height: 30px;
    border-radius: 4px;
    padding: 7px;
    font-size: 1.08em;
    margin-right: 5%;
  }

  input::placeholder {
    color: #00000040;
  }

  button {
    width: 15%;
    border-radius: 4px;
  }
`
import styled from "styled-components";

export const SearchStyled = styled.form`
  display: inline-flex;
  width: 90%;
  

  input {
    width: 90%;
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
    cursor: pointer;
  }

  @media screen and (min-width: 600px) {
    width: 500px;
  }
`
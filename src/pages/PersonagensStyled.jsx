import styled from "styled-components";

export const PersonagensStyled = styled.div`
  display: grid;
  gap: 30px;
  align-items: center;
  justify-content: center;

  .results {
    color: white;
    display: flex;
    justify-content: space-around;

    span {
      font-weight: 500;
    }
  }

  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    margin: 30px 20px;
    gap: 60px;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin: 30px 20px;
    gap: 60px;

}
`
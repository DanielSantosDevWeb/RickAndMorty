import styled from "styled-components";

export const MundosStyled = styled.div`

  display: grid;
  
  gap: 30px;
  justify-content: stretch;
  align-items: stretch;

  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    margin: 30px 20px;
    gap: 60px;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin: 30px 20px;
    gap: 60px;
    max-width: 1000px;
    min-width: auto;

}
`
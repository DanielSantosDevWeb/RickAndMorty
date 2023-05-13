import styled from "styled-components";

export const HomeStyled = styled.div`

  width: 100%;
  color: ${({ theme }) => theme.colors.branco};
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: space-between;

  h2 {
        margin:10px;
      }

  .layout {
    
    
    span {
      font-size: 1.7em;
    }

    img {
      /* width: 50%;
      margin-top: 20px; */
      display: none;
    }

    h1 {
      max-width: 300px;
      min-width: auto;
      font-size: 400%;
      width: 50%;
      text-align: left;
      text-shadow: 0px 0px 2px yellow;
    }
  }

  .text {
    div {
      font-size: 1.2em;
      
    }
  }

  .info {

      a {
        color: white;
        font-weight:700;
      }

      span {
        font-weight:700;
      }
    }

  .redes {

    div {
      margin: 20px;
    }

    ul {
      margin: 20px 70px;
    }

    a {
        color: white;
        font-weight:700;

      }
  }

  @media screen and (min-width: 600px) {
    max-width: 730px;
    

    .layout {

      display: flex;
      justify-content: space-between;
     
        
      img {
        display: inline;
        position: relative;
        width: 250px;
        right: 0px;
      }
  }
  }

  
`
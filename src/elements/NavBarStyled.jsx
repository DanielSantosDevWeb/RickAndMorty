import styled from "styled-components";

export const NavBarStyled = styled.nav`
  height: 80px;
  background-color: ${({ theme }) => theme.colors.branco};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: auto;
  max-width: 100%;

  ul {
    justify-content: center;
    display: flex;
    gap: 15%;
    align-items: center;
  }

  li {
    list-style: none;
  }

  li a {
    font-weight: 700;
    text-decoration: none;
    font-size: 100%;
    color: ${({ theme }) => theme.colors.marron};
  }

  .home {
    font-size: 2em;
  }

  a:hover {
    color:#87501F ;
  }

  @media screen and (min-width: 400px) {
    ul li a {
      font-size: 150%;
    }
  }
`
import styled from "styled-components";

interface Props {
  borderLi: boolean;
}

export const Container = styled.menu`
  background-color: white;

  width: 100%;
  max-width: 90px;
`;

export const ContainerMenu = styled.div`
  position: fixed;

  background-color: white;
  width: 100%;
  max-width: 90px;

  height: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: space-between;

  flex-direction: column;
`;

export const FirstIcone = styled.img`
  width: 50%;
  max-width: 50px;
  margin: 0 auto;
  margin-top: 24px;
`;

export const NavPages = styled.nav`
  position: relative;

  ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

export const LiPages = styled.li<Props>`
  width: 100%;
  border-left: 3px solid
    ${(props) => (props.borderLi ? "#f9a109" : "transparent")};
  height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    div:nth-child(2) {
      opacity: 1;
    }
  }

  div:nth-child(2) {
    opacity: 0;

    position: absolute;
    right: -30px;

    padding: 3px 10px;
    background-color: #454545;
    color: white;

    font-size: 0.82rem;

    transition: opacity 0.2s ease;

    &::after {
      content: "";
      position: absolute;
      top: 5px;
      left: -7px;

      border: 5px solid #454545;

      border-top: 5px solid transparent;
      border-left: 5px solid transparent;
    }
  }

  img {
    width: 20px;
  }
`;

export const IconShoppingCart = styled.div`
  background-color: #f9a109;

  height: 40px;
  width: 40px;
  margin: 0 auto;
  margin-bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  position: relative;
  cursor: pointer;

  img {
    width: 20px;
  }

  div {
    position: absolute;
    top: -7px;
    right: -7px;

    background-color: #eb5757;
    color: white;
    padding: 2px 7px;

    border-radius: 4px;

    font-size: 12px;
  }
`;

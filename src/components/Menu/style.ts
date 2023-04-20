import styled from "styled-components";

interface Props {
  borderLi?: boolean;
  dpToggle?: boolean;
}

export const Container = styled.menu`
  position: relative;

  min-width: 90px;
  max-width: 90px;

  @media (max-width: 500px) {
    min-width: 50px;
    max-width: 50px;
  }
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

  @media (max-width: 500px) {
    max-width: 50px;
  }
`;

export const FirstIcone = styled.img`
  width: 45px; 
  height: 45px;
  border-radius: 50%;
  object-fit: cover;

  margin: 0 auto;
  margin-top: 24px;

  cursor: pointer;

  @media (max-width: 500px) {
    width: 35px;
    height: 35px;
  }
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

  position: relative;

  cursor: pointer;


  img {
    width: 20px;
  }

  @media (max-width: 500px) {
    img {
      width: 17px;
    }
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
    left: 25px;

    background-color: #eb5757;
    color: white;
    padding: 2px 7px;

    border-radius: 4px;

    font-size: 12px;
  }

  @media (max-width: 500px) {
    height: 30px;
    width: 30px;

    img {
      max-width: 15px;
    }
  }
`;

import styled from "styled-components";

interface Props {
  toggle?: boolean;
}

export const Container = styled.section`
  width: 100%;
  max-width: 290px;

  height: 100%;
  min-height: 100vh;
  max-height: max-content;

  display: flex;
  flex-direction: column;

  position: relative;

  @media (max-width: 730px) {
    display: none;
  }
`;


export const MenuMobile = styled.div`
  display: none;
  position: relative;

  @media (max-width: 730px) {
    display: block;
  }
`;

export const ContentMobile = styled.menu<Props>`
  position: absolute;
  top: 0;
  right: 0px;

  z-index: 10;

  width: fit-content;
  min-width: 290px;

  display: ${(props) => (props.toggle ? "block" : "none")};

  box-shadow: 0 0 25px rgba(100, 100, 100, 0.2);
`;

export const btnToggle = styled.button`
  position: relative;
  top: 26px;
  right: 20px;

  z-index: 15;

  border: none;
  background: none;

  img {
    width: 20px;
    height: 20px;
    object-fit: cover;

    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  &:focus {
    outline: 0;

    img {
      rotate: 360deg;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerContent = styled.main`
  width: 100%;
  max-width: 650px;

  padding: 40px 20px;
`;

export const ButtonBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: transparent;

  font-weight: 700;
  font-size: 0.9rem;
  color: #f9a109;

  cursor: pointer;

  img {
    width: 15px;
    height: fit-content;
    rotate: 180deg;
    margin-right: 6px;
  }
`;

export const Header = styled.div`
  display: flex;
  margin: 30px 0 50px 0;

  h1 {
    font-weight: 700;
    font-size: 1.3rem;
    color: #34333a;
  }

  img {
    width: 18px;
    margin-right: 15px;

    fill: black;
  }
`;

export const SectionList = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;


  h2 {
    font-weight: 500;
    font-size: 18px;
    font-size: 1.12rem;
    margin-bottom: 18px;
  }

  ul {

    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 18px;
  }

  li {
    overflow: hidden;

    background-color: white;
    width: 100%;
    max-width: 200px;
    height: fit-content;
    padding: 15px;

    border-radius: 12px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);

    font-weight: 500;
    font-size: 1rem;

    display: flex;
    justify-content: space-between;

    cursor: default;
  }

  strong {
    /* max-width: 90px; */
    width: 100%;
    overflow: hidden;
  }

  p {
    margin-left: 10px;

    font-size: 12px;
    font-weight: 700;
    color: #f9a10a;

    white-space: nowrap;
  }

  @media (max-width: 930px) {
    ul {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 800px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 730px) {
    ul {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 520px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 370px) {
    ul {
      grid-template-columns: 1fr;
    }

    li {
      max-width: 100%;
    }
  }
`;

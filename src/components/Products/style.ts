import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 900px;
  padding: 25px 40px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1.6rem;
    max-width: 380px;
    color: #34333a;
  }

  strong {
    color: #f9a109;
  }

  form {
    margin-left: 10px;
    width: 100%;
    max-width: 280px;
    min-width: 120px;
    height: 35px;

    display: flex;
    align-items: center;

    position: relative;
  }

  input {
    width: 100%;
    height: 100%;

    border: none;
    border-radius: 12px;

    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);

    padding: 2px 10px 2px 38px;

    &:focus {
      outline: 0;
    }
  }

  button {
    position: absolute;
    height: 100%;
    padding: 5px 10px;
    background-color: transparent;

    border: none;

    cursor: pointer;
  }

  img {
    width: 15px;
  }

  @media (max-width: 650px) {
    flex-direction: column;

    h1 {
      display: none;
    }

    form {
      margin: 0;
    }
  }
`;

export const ContainerOptionsMerchandise = styled.section`
  margin-top: 40px;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;

  article {
    width: 100%;
    min-width: 200px;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 18px;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 19px;
  }

  li {
    height: fit-content;

    display: flex;
    justify-content: space-between;

    padding: 13px 16px;

    background-color: white;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
    border-radius: 12px;

    cursor: pointer;
  }

  img {
    width: 12px;
    rotate: 45deg;
  }

  @media (max-width: 1000px) {
    ul {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 850px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 425px) {
    ul {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 360px) {
    article {
      padding-right: 20px;
    }
  }
`;

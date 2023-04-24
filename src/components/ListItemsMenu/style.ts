import styled from "styled-components";

export const Container = styled.article`
  padding: 20px;
  padding-bottom: 170px;

  background-color: #fff0de;

  width: 100%;
  max-width: 290px;

  height: 100%;
  min-height: 100vh;
  max-height: max-content;

  display: flex;
  flex-direction: column;

  position: relative;

  @media (max-width: 730px) {
    /* display: none; */
    /* width: 100%; */
    max-width: 100%;

    button {
      background-color: red;
    }
  }
`;

export const BtnoptionAddItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 10px;

  background-color: #80485b;
  border-radius: 24px;

  p {
    font-weight: 700;
    font-size: 16px;
    color: white;
  }

  img {
    position: relative;
    top: -15px;

    margin-right: 10px;
  }

  button {
    margin-top: 13px;
    border: none;
    background-color: white;

    padding: 7px 15px;

    font-size: 14px;
    font-weight: 700;

    border-radius: 12px;

    cursor: pointer;

    &:focus {
      outline: 0;
    }
  }
`;

export const NoItens = styled.div`
  position: absolute;
  top: 170px;
  left: 0;

  width: 100%;
  height: 60%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    position: relative;
    z-index: 5;
    font-weight: 700;
    color: black;

    text-shadow: 0 0 12px black;
  }

  img {
    position: absolute;
    width: 70%;
  }
`;

export const HeaderModification = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-top: 30px;

  cursor: pointer;

  h3 {
    font-weight: 700;
    font-size: 24px;
  }

  img {
    width: 18px;
  }

  label {
    display: flex;
    width: 100%;
  }

  input {
    width: 100%;
    padding: 4px 15px;
    border: 2px solid #f9a109;

    border-top-left-radius: 6px;
    border-end-start-radius: 6px;

    &:focus {
      outline: 0;
    }
  }

  button {
    background-color: #f9a109;
    border: none;
    color: white;
    padding: 4px 7px;

    border-end-end-radius: 6px;
    border-top-right-radius: 6px;

    cursor: pointer;
  }
`;

export const BtnTrash = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;

  display: block;
  background-color: #f9a109;
  border: none;
  padding: 0 10px;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  img {
    width: 10px;
    background-color: red;
  }
`;

export const ListProducts = styled.ul`
  list-style: none;
  margin-top: 35px;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  span {
    font-weight: 500;
    font-size: 14px;

    color: #828282;
  }

  li {
    width: 100%;
    max-width: 250px;

    display: flex;
    justify-content: space-between;
  }

  p {
    width: 70%;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: 1.1rem;
    font-weight: 500;
    color: black;

    cursor: pointer;
  }
`;

export const EditProductCart = styled.div`
  border: 2px solid #f9a109;
  border-radius: 24px;

  padding: 5px 20px;

  font-weight: 700;
  font-size: 13px;
  color: #f9a109;

  position: relative;

  input {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    opacity: 0;

    cursor: pointer;
  }

  button {
    width: 35px;
    height: 100%;

    border: none;
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #f9a109;

    img {
      width: 11px;
    }
  }

  input:checked ~ div {
    display: flex;
  }
`;

export const Edit = styled.div`
  // aqui

  display: none;

  position: absolute;
  top: -3px;
  right: -3px;
  z-index: 4;

  border-radius: 12px;

  width: 160px;
  height: 36px;

  background-color: white;

  div {
    padding: 3px 10px;

    display: flex;
    justify-content: space-between;

    width: 100%;
  }

  img {
    width: 12px;
    cursor: pointer;

    &:nth-child(3) {
      rotate: 45deg;
    }
  }

  button:nth-child(1) {
    cursor: pointer;
  }

  button:nth-child(2) {
    background-color: transparent;
    border-radius: 24px;
    border: 2px solid #f9a109;
    color: #f9a109;
    width: 60px;
  }
`;

export const ContainerSave = styled.div`
  background-color: white;
  width: 100%;

  padding: 30px;

  position: absolute;
  bottom: 0;
  right: 0;

  div {
    display: flex;

    border: 2px solid #f9a109;
    border-radius: 12px;
  }

  input {
    width: 100%;
    padding: 12px 10px;

    border: none;
    border-radius: 12px;

    &:focus {
      outline: 0;
    }
  }

  button {
    background-color: #f9a109;
    border: none;
    border-radius: 8px;
    padding: 0 10px;

    color: white;
    font-size: 13px;
    font-weight: 700;

    cursor: pointer;
  }
`;

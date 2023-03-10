import styled from "styled-components";

export const Contaier = styled.div`
  background-color: #fafafe;

  width: 100%;
  height: 100vh;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 24px;
  padding: 30px 40px;

  height: fit-content;

  width: 100%;
  max-width: 400px;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;

  h1 {
    font-weight: 700;
    font-size: 1.7rem;
    margin-bottom: 5px;
  }

  div {
    display: flex;
    height: 40px;

    position: relative;

    display: flex;
    align-items: center;
  }

  input {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    border: 1px solid #bdbdbd;
    border-radius: 8px;

    padding: 0 20px 0 40px;

    transition: border 0.12s ease;

    &:focus {
      outline: 0;
      border: 1px solid #8d8d8d;
    }
  }

  img {
    width: 18px;
    position: relative;
    z-index: 5;
    margin-left: 12px;
  }

  button {
    background-color: #2f80ed;
    border: none;
    color: white;
    padding: 6px;
    border-radius: 8px;

    font-weight: 700;
    font-size: 0.9rem;

    margin-top: 5px;

    cursor: pointer;
  }

  @media (max-width: 340px) {
    padding: 30px 30px 50px 30px;
  }
`;

export const ContaierSocialMidia = styled.div`
  display: flex;
  flex-direction: column;

  height: 150px;
  padding-bottom: 120px;

  margin: 0 auto;
  margin-top: 10px;

  width: 100%;
  max-width: 240px;

  p {
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #828282;
  }

  p:nth-child(3) {
    margin-top: 20px;
  }

  div {
    width: 100%;

    margin-top: 20px;

    display: flex;
    justify-content: space-around;

    img {
      width: 38px;
      border-radius: 50%;

      cursor: pointer;
    }
  }

  strong {
    cursor: pointer;
    color: #2D9CDB;
  }

  @media (max-width: 226px) {
    padding-bottom: 160px;
  }
`;

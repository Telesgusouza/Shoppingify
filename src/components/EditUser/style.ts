import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 550px;
  margin-top: 40px;
`;

export const ButtonBack = styled.button`
  display: flex;
  align-items: center;

  background: none;
  border: none;

  font-size: 17px;
  color: #2d9cdb;
  margin-bottom: 20px;

  cursor: pointer;

  img {
    height: 15px;
    margin-right: 14px;
  }

  &:focus {
    outline: 0;
  }
`;

export const ContainerContent = styled.form`
  display: grid;
  grid-template-columns: 1fr;

  grid-gap: 27px;

  padding: 30px;

  border-radius: 12px;
  border: 1px solid #e0e0e0;

  div {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 270px;

    &:nth-child(1) {
      width: fit-content;
      flex-direction: row;
    }

    input {
      margin-top: 4px;
      border: 1px solid #828282;
      border-radius: 12px;
      padding: 10px 18px;

      &:focus {
        outline: 0;
      }
    }

    &:nth-child(3) {
      input {
        cursor: not-allowed;
      }
    }
  }

  button {
    width: fit-content;
    padding: 8px 24px;

    border: none;
    border-radius: 8px;

    background-color: #2F80ED;
    color: white;

    cursor: pointer;

    &:focus {
      outline: 0;
    }
  }
`;

export const ChangePhoto = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 80px;

    position: relative;

    border-radius: 8px;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 8px;
    }
  }

  input {
    position: absolute;
    top: 0;
    left: 0;

    z-index: 7;

    opacity: 0;

    width: 100%;
    height: 100%;

    cursor: pointer;
  }

  img:nth-child(2) {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  img:nth-child(3) {
    position: absolute;
    z-index: 5;
    width: 20px;
  }

  strong {
    margin-left: 27px;
    font-size: 13px;
    font-weight: 700;
    color: #828282;
  }
`;

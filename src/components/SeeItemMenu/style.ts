import styled from "styled-components";

export const Container = styled.article`
  background-color: white;
  min-height: 100vh;
  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const btnBack = styled.button`
  background-color: transparent;
  border: none;
  margin: 10px 0;

  /* width: 100%; */
  width: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 0.9rem;
  font-weight: 700;
  color: #f9a109;

  cursor: pointer;

  img {
    rotate: 180deg;
    width: 12px;
    margin-right: 10px;
  }
`;

export const imgProudct = styled.img`
  margin-top: 30px;
  width: 100%;
  height: 180px;

  border-radius: 20px;
  object-fit: cover;
`;

export const ListFields = styled.ul`
  margin-top: 30px;

  list-style: none;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  min-height: 70vh;

  div {
    display: grid;
    height: fit-content;
    grid-gap: 20px;
  }

  li {
    display: flex;
    flex-direction: column;
  }

  span {
    color: #919194;
    font-size: 12px;
    font-weight: 500;
  }

  strong {
    font-weight: 700;
    font-size: 18px;
    color: black;
  }

  p {
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
  }
`;

export const ContainerBtn = styled.div`
  margin-top: 20px;
  display: flex;

  button {
    padding: 15px 20px;

    border: none;
    background-color: transparent;

    font-size: 13px;
    font-size: 0.84rem;
    font-weight: 700;

    cursor: pointer;

    &:nth-child(1) {
      margin-right: 10px;
    }

    &:nth-child(2) {
      background-color: #f9a109;
      border-radius: 12px;
      color: white;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
`;

export const ContainerContent = styled.main`
  width: 100%;
  max-width: 900px;
  padding: 25px 40px;
  margin: 0 auto;

  h1 {
    font-size: 26px;
    color: #34333a;
  }

  h2 {
    font-size: 17px;
    color: #34333a;
  }

  strong {
    color: #f9a109;
  }
`;

export const ListProducts = styled.div`
  margin-top: 50px;

  ul {
    width: 100%;

    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }

  li {
    width: 100%;

    background-color: white;
    box-shadow: 0 0 10px rgba(100, 100, 100, 0.12);
    border-radius: 8px;
    padding: 15px 22px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  strong {
    color: #34333a;
    font-weight: 700;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p {
    color: #34333a;

    font-weight: 700;
    font-size: 13px;
    font-size: 0.85rem;

    width: 100%;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:nth-child(1) {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 450px) {
    li {
      flex-direction: column;
    }
    strong,
    div {
      width: 100%;
    }
    div {
      margin-top: 10px;
      flex-direction: row;

      display: flex;
      justify-content: space-between;
    }

    p:nth-child(2) {
      text-align: right;
    }
  }
`;

export const ContainerTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;

  background-color: white;
  box-shadow: 0 0 10px rgba(100, 100, 100, 0.12);
  border-radius: 8px;
  padding: 15px 22px;

  width: 100%;
  max-width: 100%;

  cursor: pointer;

  strong {
    width: 70px;
  }

  p {
    text-align: right;

    width: 100%;
    max-width: 150px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media (max-width: 450px) {
    flex-direction: column !important;

    strong {
      width: 100%;
    }

    p {
      margin-top: 10px;


      width: 100%;
      max-width: 270px;



      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      text-align: left;

    }
  }
`;

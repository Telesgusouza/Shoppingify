import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;



export const ContainerContent = styled.main`
  width: 100%;
  max-width: 700px;
  height: fit-content;

  padding: 40px 20px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;

  h1 {
    font-size: 1.63rem;
    font-weight: 700;
    color: #34333a;

    margin-bottom: 10px;
  }

  h2 {
    font-size: 18px;
  }

  strong {
    font-size: 1rem;
    font-weight: 500;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    width: 100%;
    list-style: none;
  }

  div {
    display: flex;
    align-items: center;
  }

  li {
    width: 100%;
    display: flex;
    justify-content: space-between;

    background-color: white;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    padding: 20px 25px;

    cursor: pointer;

    img {
      width: 18px;
      margin-right: 8px;
    }
  }

  @media (max-width: 400px) {
    li {
      flex-direction: column;
    }
    div:nth-child(2) {
      margin-top: 20px;

      img {
        display: none;
      }
    }
  }
`;

export const LiInfo = styled.div`
  width: 110px;

  display: flex;

  justify-content: space-between;
  align-items: center;

  justify-self: center;

  img {
    object-fit: contain;
    height: 18px;
  }

  div {
    color: #56ccf2;
    font-size: 12px;
    font-weight: 500;

    border: 1px solid #56ccf2;
    border-radius: 8px;
    padding: 4px 7px;
  }
`;


export const TextNoHistory = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  strong {
    text-align: center;
    margin: 0 auto;

    font-size: 18px;
    font-weight: 700;
    color: rgb(100, 100, 100);
    margin-bottom: 50px;

    padding-bottom: 5px;
    border-bottom: 1px solid rgb(100, 100, 100);
  }
`;

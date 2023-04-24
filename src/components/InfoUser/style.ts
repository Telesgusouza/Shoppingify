import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: 550px;

  border: 1px solid #e0e0e0;
  border-radius: 12px;

  @media (max-width: 500px) {
    max-width: 100%;
  }
`;

export const HeaderUser = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;

  h2 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #393939;
  }

  button {
    padding: 8px 30px;

    background-color: transparent;
    border-radius: 12px;
    border: 1px solid #828282;

    color: #828282;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    flex-direction: column;

    button {
      margin-top: 10px;
    }
  }
`;

export const userInfo = styled.div`
  display: flex;
  align-items: center;

  border-top: 1px solid #e0e0e0;

  img {
    margin: 0;
    width: 100%;
    max-width: 70px;
    height: 70px;
    object-fit: cover;
  }

  div {
    min-height: 50px;
    display: flex;
    align-items: center;
  }

  div:nth-child(1) {
    padding: 6px 30px 6px 20px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 13px;
    font-weight: 700;
    color: #bdbdbd;
  }

  div:nth-child(2) {
    text-align: left;
    padding: 7px 20px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    width: 100%;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    margin: auto;
  }

  @media (max-width: 500px) {
    flex-direction: column;

    div:nth-child(2) {
      width: 100%;
    }
  }
`;

import styled from "styled-components";

interface IProps {
  toggle: boolean;
}

export const Container = styled.div<IProps>`
  display: ${(props) => (props.toggle ? "flex" : "none")};

  /* position: fixed; */
  /* position: absolute; */
  position: absolute;
  top: 0;
  left: 0;

  justify-content: center;
  align-items: center;

  z-index: 50;

  min-height: 100vh;
  width: 100vw;

  padding: 40px 20px;

  background-color: rgba(0, 0, 0, 0.2);
`;

export const ContainerContent = styled.section`
  display: "none";

  background-color: white;
  padding: 25px 35px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

  img {
    width: 14px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  @media (max-width: 340px) {
    width: 100%;
  }
`;

export const PaymentMethodBtn = styled.div`
  margin-top: 15px;

  width: 100%;
  max-width: 180px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  button {
    width: 100%;

    padding: 6px;

    background-color: rgba(200, 200, 200, 0.9);
    color: rgb(70, 70, 70);
    font-weight: 700;

    border: none;

    cursor: pointer;
  }

  @media (max-width: 300px) {
    grid-template-columns: 1fr;
  }
`;

export const PaymentPix = styled.div`
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin-bottom: 4px;
    font-size: 1.4rem;
  }

  strong {
    padding-top: 5px;
    font-weight: 700;
    font-size: 13px;
  }

  img {
    width: 200px;
    object-fit: contain;
    margin: 0px auto;
  }

  div {
    text-align: center;

    margin-bottom: 20px;
  }

  @media (max-width: 330px) {
    img {
      width: 100%;
    }
  }
`;

export const PixBox = styled.div`
  padding: 16px;
  background-color: rgb(200, 200, 200);

  display: flex;
  flex-direction: column;

  p {
    width: 100%;
    max-width: 200px;
    background-color: white;
    font-size: 13px;

    overflow: hidden;
    padding: 4px 6px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  button {
    margin-top: 10px;
    padding: 6px;
    border: none;

    background-color: rgb(65, 105, 225);
    background-color: #2b58de;

    color: white;
    cursor: pointer;
  }
`;

export const ValueCart = styled.div`
  margin-top: 25px;
  font-size: 0.9rem;
`;

export const BankSlip = styled.div`
  width: 100%;

  h2 {
    margin: 10px 0 7px 0;
  }

  p {
    margin-bottom: 5px;
  }

  strong {
    font-weight: 700;
    font-size: 13px;
  }

  form {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }

  label {
    width: 100%;
    max-width: 250px;
  
    display: flex;
    justify-content: space-between;

    p {
      min-width: 70px;
      margin-right: 5px;
    }
  }

  button {
    margin-top: 10px;
    padding: 6px;
    border: none;

    background-color: rgb(65, 105, 225);
    background-color: #2b58de;

    color: white;
    cursor: pointer;
  }

  input {
    padding: 3px 10px;

    width: 100%;

    &:focus {
      outline: 0;
    }
  }

  @media (max-width: 340px) {
    label {
      flex-direction: column;
    }

    input {
      margin-top: 4px;
    }
  }
`;

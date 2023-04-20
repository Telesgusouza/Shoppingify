import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  section {
    width: 100%;
  }
`;

export const FooterUser = styled.footer`
  display: flex;
  justify-content: right;
  padding: 30px 0;

  button {
    padding: 5px 12px;

    border: none;
    border-radius: 4px;
    font-weight: 700;

    background-color: rgba(180, 180, 180, 0.3);

    cursor: pointer;

    &:nth-child(1) {
      color: white;
      background-color: #ff6961;
    }
  }
`;

export const ContainerContent = styled.section`
  width: 100%;
  max-width: 600px;
  padding: 40px 20px;
  margin: 0 auto;

  h1 {
    text-align: center;
    font-weight: 700;
    margin-bottom: 5px;
  }

  p {
    text-align: center;
    margin-bottom: 20px;
  }
`;

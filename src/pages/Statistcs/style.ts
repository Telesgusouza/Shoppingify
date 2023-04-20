import styled from "styled-components";

interface IProps {
  loadingbar?: number;
  category?: boolean;
  itensNo?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerContent = styled.main`
  width: 100%;
  max-width: 650px;
  height: fit-content;
  padding: 40px 20px;

  strong {

    font-size: 17px;
    font-weight: 700;
    color: rgb(100, 100, 100);
    margin-bottom: 50px;

    padding-bottom: 5px;
    border-bottom: 1px solid rgb(100, 100, 100);
  }
`;

export const ContainerStatistics = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;

  margin-bottom: 30px;
  margin-top: 20px;

  h2 {
    font-weight: 500;
    font-size: 24px;
  }

  div:nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: space-between;

    p,
    span {
      font-size: 14px;
      font-weight: 700;
    }

    p {
      margin-right: 20px;
      white-space: break-spaces;
    }
  }

  ul {
    height: fit-content;

    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;

    h2 {
      font-size: 20px;
      margin: 0;
    }
  }
`;

export const Bar = styled.div<IProps>`
  margin-top: 10px;

  width: 100%;
  height: 6px;
  border-radius: 4px;
  position: relative;

  background-color: #e0e0e0;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: ${(props) => props.loadingbar}%;
    border-radius: 4px;

    background-color: ${(props) => (props.category ? "#56CCF2" : "#F9A109")};
  }
`;

export const Chart = styled.div<IProps>`
  width: 100%;
  height: fit-content;

  margin-top: ${(props) => (props.itensNo ? 30 : 0)}px;

  @media (max-width: 425px) {
    display: none;
  }
`;

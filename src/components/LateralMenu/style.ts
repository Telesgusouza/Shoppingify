import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 290px;

  height: 100%;
  min-height: 100vh;
  max-height: max-content;

  display: flex;
  flex-direction: column;

  position: relative;

  @media (max-width: 730px) {
    display: none;
  }
`;

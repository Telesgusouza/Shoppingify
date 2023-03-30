import LateralMenu from "../../components/LateralMenu";
import Menu from "../../components/Menu";
import * as Styled from "./style";

export default function History() {
  return (
    <Styled.Container>
      <Menu page="history" />

      <Styled.ContainerContent>
        <h1>Shoppinging Histórico</h1>

        <section>

            <h2>agosto 2022</h2>

          <ul>
            <li></li>
          </ul>
        </section>
      </Styled.ContainerContent>

      <LateralMenu />
    </Styled.Container>
  );
}

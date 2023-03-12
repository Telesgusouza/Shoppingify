import Menu from "../../components/Menu";
import Products from "../../components/Products";
import LateralMenu from "../../components/LateralMenu";

import * as Styled from "./style";

export default function InitialPage() {

  return (
    <Styled.Container>
      <Menu page="inicialpage" />

      <Products />

      <LateralMenu />
    </Styled.Container>
  );
}

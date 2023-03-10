import { useEffect } from "react";

import { getDataProducts } from "../../firebase/Firestore";

import Menu from "../../components/Menu";
import Products from "../../components/Products";
import LateralMenu from "../../components/LateralMenu";

import * as Styled from "./style";

export default function InitialPage() {
  useEffect(() => {
    async function getProducts() {
      const getData = await getDataProducts();
      // console.log(getData);
    }

    getProducts();
  }, []);

  return (
    <Styled.Container>
      <Menu page="inicialpage" />

      <Products />

      <LateralMenu />
    </Styled.Container>
  );
}

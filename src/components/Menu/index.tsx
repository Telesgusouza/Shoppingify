import * as Styled from "./style";

import { IPropsOptionMenus } from "../../interfaces";
import icone from "../../assets/shoppingify-master/logo.svg";

import menuImg from "../../assets/icons/menu.svg";
import reloadImg from "../../assets/icons/reload.svg";
import graphicImg from "../../assets/icons/graphic.svg";

import shoppingCartImg from "../../assets/icons/cart-shorpping.svg";

export default function Menu({ page }: IPropsOptionMenus) {
  return (
    <Styled.Container>
      <Styled.ContainerMenu>
        <Styled.FirstIcone src={icone} alt="icone" />

        <Styled.NavPages>
          <ul>
            <Styled.LiPages borderLi={page === "inicialpage"}>
              <img src={menuImg} alt="" />
              <div>itens</div>
            </Styled.LiPages>

            <Styled.LiPages borderLi={page === "history"}>
              <img src={reloadImg} alt="" />
              <div>itens</div>
            </Styled.LiPages>

            <Styled.LiPages borderLi={page === "estátics"}>
              <img src={graphicImg} alt="" />
              <div>itens</div>
            </Styled.LiPages>
          </ul>
        </Styled.NavPages>

        <Styled.IconShoppingCart>
          <img src={shoppingCartImg} alt="icone de carrinho de compras" />
          <div>3</div>
        </Styled.IconShoppingCart>
      </Styled.ContainerMenu>
    </Styled.Container>
  );
}

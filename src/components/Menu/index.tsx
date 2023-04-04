import { useSelector } from "react-redux";
import { useRef, useState } from "react";

import * as Styled from "./style";

import {
  IPropsOptionMenus,
  IPropsReducer,
  IPropsRootReducer,
} from "../../interfaces";
import icone from "../../assets/shoppingify-master/logo.svg";

import menuImg from "../../assets/icons/menu.svg";
import reloadImg from "../../assets/icons/reload.svg";
import graphicImg from "../../assets/icons/graphic.svg";

import shoppingCartImg from "../../assets/icons/cart-shorpping.svg";
import { useEffect } from "react";
import { Path, useNavigate } from "react-router-dom";
import { setListData } from "../../firebase/Firestore";

export default function Menu({ page }: IPropsOptionMenus) {
  const { listCar } = useSelector(
    (rootReducer: IPropsReducer) => rootReducer.useShoppingCart
  );
  const [quantItemCar, setQuantItemCar] = useState<number>(0);

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const navigate = useNavigate();


  useEffect(() => {
    const array = [];
    listCar.forEach((element) => {
      element.products.forEach((item) => {
        array.push(item);
      });
    });

    setQuantItemCar(array.length);
  });

  async function handlePayment() {
    if (listCar.length > 0) {
      await setListData();
      navigate("/payment", { replace: true });
    }
  }

  function handleToggleMenu() {
    setToggleMenu((p) => !p);
  }

  function handleNavigate(url: Partial<Path>) {
    navigate(url, { replace: true });
  }


  return (
    <Styled.Container>
      <Styled.ContainerMenu>
        <Styled.FirstIcone src={icone} alt="icone" />

        <Styled.NavPages>
          <ul>
            <Styled.LiPages
              borderLi={page === "inicialpage"}
              onClick={() => handleNavigate({ pathname: `/Initialpage` })}
            >
              <img src={menuImg} alt="" />
              <div>Página inicial</div>
            </Styled.LiPages>

            <Styled.LiPages borderLi={page === "history"} onClick={() => handleNavigate({ pathname: `/history` })} >
              <img src={reloadImg} alt="" />
              <div>Histórico</div>
            </Styled.LiPages>

            <Styled.LiPages borderLi={page === "statistics"} onClick={() => handleNavigate({ pathname: `/statistcs` })} >
              <img src={graphicImg} alt="" />
              <div>Estaticas</div>
            </Styled.LiPages>
          </ul>
        </Styled.NavPages>

        <Styled.IconShoppingCart onClick={handlePayment}>
          <img src={shoppingCartImg} alt="icone de carrinho de compras" />
          <div>{quantItemCar}</div>
        </Styled.IconShoppingCart>
      </Styled.ContainerMenu>
    </Styled.Container>
  );
}

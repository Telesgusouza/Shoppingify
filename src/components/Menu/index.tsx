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
import { getPhotoUser } from "../../firebase/Authentication";
import { DocumentData } from "firebase/firestore";

export default function Menu({ page }: IPropsOptionMenus) {
  const { listCar } = useSelector(
    (rootReducer: IPropsReducer) => rootReducer.useShoppingCart
  );
  const [quantItemCar, setQuantItemCar] = useState<number>(0);

  const [photoUrl, setPhotoUrl] = useState<string>("");

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

  useEffect(() => {
    async function getPhoto() {
      const data = await getPhotoUser();
      if (!!data) {
        setPhotoUrl(data);
      }
    }

    getPhoto();
  }, []);

  async function handlePayment() {
    if (listCar.length > 0) {
      await setListData();
      navigate("/payment", { replace: true });
    }
  }

  function handleNavigate(url: Partial<Path>) {
    navigate(url, { replace: true });
  }

  return (
    <Styled.Container>
      <Styled.ContainerMenu>
        <Styled.FirstIcone
          src={photoUrl !== "" ? photoUrl : icone}
          alt="imagem de perfil"
          onClick={() => handleNavigate({ pathname: `/infouser` })}
        />

        <Styled.NavPages>
          <ul>
            <Styled.LiPages
              borderLi={page === "inicialpage"}
              onClick={() => handleNavigate({ pathname: `/Initialpage` })}
            >
              <img src={menuImg} alt="" />
            </Styled.LiPages>

            <Styled.LiPages
              borderLi={page === "history"}
              onClick={() => handleNavigate({ pathname: `/history` })}
            >
              <img src={reloadImg} alt="" />
            </Styled.LiPages>

            <Styled.LiPages
              borderLi={page === "statistics"}
              onClick={() => handleNavigate({ pathname: `/statistcs` })}
            >
              <img src={graphicImg} alt="" />
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

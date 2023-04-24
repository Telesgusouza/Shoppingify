import * as Styled from "./style";

import actionsType from "../../actions";
import { IPropsReducer, IPropsRootReducer } from "../../interfaces";

import arrowImg from "../../assets/icons/arrow.svg";
import imagemTeste from "../../assets/arte_rosas.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getItem } from "../../firebase/Firestore";
import { toast } from "react-toastify";
import { DocumentData } from "firebase/firestore";

interface IPropsProduct {
  value: number;
  description: string;
  quant: number;
  product: string;
}

export default function SeeItemMenu() {
  const [product, setProduct] = useState<DocumentData>({});
  const [category, setCategory] = useState<string>("");
  const [valueProd, setValueProd] = useState<string>("");
  const dispatch = useDispatch();
  const { getKey } = useSelector(
    (rootReducer: IPropsRootReducer) => rootReducer.useToggleLateralMenu
  );
  const { listCar } = useSelector(
    (rootReducer: IPropsReducer) => rootReducer.useShoppingCart
  );

  useEffect(() => {
    async function getProduct() {
      if (getKey !== undefined) {
        const data = await getItem(getKey);
        if (data !== undefined) {
          setProduct(data);
        }
      }
    }

    getProduct();
  }, []);

  useEffect(() => {
    const categoryProduct = getKey?.split("/")[0];
    if (categoryProduct !== undefined) {
      setCategory(categoryProduct);
    }

    if (Object.keys(product).length > 1) {
      const valueProduct = product.value.toFixed(2);

      // console.log(valueProduct.replace(/\./g, ","))

      const fomartValue = valueProduct.replace(/\./g, ",");
      setValueProd(fomartValue);
    }
  }, [product]);

  function backList() {
    dispatch({
      type: actionsType.toggleLateralMenu,
      payload: actionsType.seeListMenu,
      payloadGetKey: "",
    });
  }

  function deleteItem() {
    const category = getKey?.split("/")[0];
    const keyItem = getKey?.split("/")[1];
    const list = listCar.find((obj) => obj.category === category);
    const indexList = list?.products.findIndex((obj) => obj.key === keyItem);

    if (indexList !== undefined) {
      list?.products.splice(indexList, 1);
    }

    if (list !== undefined && list.products.length <= 0) {
      const indexListCart = listCar.findIndex((obj) => list === obj);
      listCar.splice(indexListCart, 1);
    }

    dispatch({
      type: actionsType.addItemCar,
      payload: listCar,
    });

    dispatch({
      type: actionsType.toggleLateralMenu,
      payload: actionsType.seeListMenu,
      payloadGetKey: "",
    });
  }

  function addItem() {
    const keyItem = getKey?.split("/")[1];
    listCar.forEach((element) => {
      const indexItem = element.products.find((obj) => obj.key === keyItem);

      if (indexItem !== undefined) {
        if (indexItem.quant < indexItem.originalQuant) {
          indexItem.quant++;
        } else {
          toast.error("Não mais no estoque!", { theme: "light" });
        }
      }
    });
  }

  return (
    <Styled.Container>
      <Styled.btnBack onClick={backList}>
        <img src={arrowImg} alt="botão para voltar a lista" /> Voltar
      </Styled.btnBack>

      {Object.keys(product).length > 1 && (
        <>
          <Styled.ListFields>
            <div>
              <li>
                <span>Nome</span>
                <strong>{product.product}</strong>
              </li>

              <li>
                <span>Categoria</span>
                <p>{category}</p>
              </li>
            </div>

            <div>
              <li>
                <span>Nota</span>
                <p>{product.description}</p>
              </li>

              <li>
                <span>valor (unidade ou kg)</span>
                <p> R$ {valueProd} </p>
              </li>
            </div>
          </Styled.ListFields>

          <Styled.ContainerBtn>
            <button onClick={deleteItem}>delete</button>
            <button onClick={addItem}>add a lista</button>
          </Styled.ContainerBtn>
        </>
      )}
    </Styled.Container>
  );
}

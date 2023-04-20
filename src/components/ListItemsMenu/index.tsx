import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import actionType from "../../actions";
import { IPropsData, IPropsItemMenu, IPropsReducer } from "../../interfaces";

import * as Styled from "./style";

import trashImg from "../../assets/icons/trash.svg";
import multiImg from "../../assets/icons/xmarkYe.svg";
import minusImg from "../../assets/icons/minusYe.svg";

import undrawShopping from "../../assets/shoppingify-master/undraw_shopping_app_flsj 1.svg";
import { setListData } from "../../firebase/Firestore";

export default function ListItemsMenu() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [listProducts, setListProducts] = useState<IPropsItemMenu[]>([]);

  const [listNameToggle, setListNameToggle] = useState<boolean>(true);

  const { listCar } = useSelector(
    (rootReducer: IPropsReducer) => rootReducer.useShoppingCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {};
  }, []);

  function setDispatch(dispatchItem: IPropsData[]) {
    dispatch({
      type: actionType.addItemCar,
      payload: dispatchItem,
    });
  }

  function toggleValueItem(
    toggle: boolean,
    item: IPropsItemMenu,
    list: IPropsData
  ) {
    if (toggle) {
      // adicionar
      if (!(item.originalQuant <= item.quant)) {
        item.quant++;
        setDispatch(listCar);
      }
    } else {
      // menos
      if (item.quant > 0) {
        item.quant--;
        setDispatch(listCar);
      }
      if (item.quant === 0) {
        const indexObj = list.products.findIndex(
          (obj: IPropsItemMenu) => obj === item
        );

        list.products.splice(indexObj, 1);

        if (list.products.length <= 0) {
          const indexListCart = listCar.findIndex((obj) => list === obj);
          listCar.splice(indexListCart, 1);
        }

        setDispatch(listCar);
      }
    }

    setListData();
  }

  function trashItem(item: IPropsItemMenu, list: IPropsData) {
    const indexList = list.products.findIndex((obj) => item === obj);
    list.products.splice(indexList, 1);
    setDispatch(listCar);

    if (list.products.length <= 0) {
      const indexListCart = listCar.findIndex((obj) => list === obj);
      listCar.splice(indexListCart, 1);
    }

    setListData();
  }

  function toggleMenu(key: string, category: string) {
    dispatch({
      type: actionType.toggleLateralMenu,
      payload: actionType.seeProductMenu,
      payloadGetKey: category + "/" + key,
    });
  }

  function searchForItem() {
    const listItens: IPropsItemMenu[] = [];

    // listCar
    if (searchInput !== "") {
      listCar.forEach((element) => {
        element.products.forEach((item) => {
          if (item.product.includes(searchInput)) {
            listItens.push(item);
          }
        });
      });

      setListProducts(listItens);
    } else {
      setListProducts([]);
    }

    setListProducts(listItens);
  }

  function toggleValueItemFilter(
    toggle: boolean,
    item: any,
    toggleFun: boolean
  ) {
    listCar.forEach((element) => {
      const indexItem = element.products.find((obj) => obj.key === item.key);
      if (!!indexItem) {
        if (toggleFun) {
          toggleValueItem(toggle, item, element);
        } else {
          trashItem(item, element);
          const indexItem = listProducts.findIndex(
            (obj) => obj.key === item.key
          );
          listProducts.splice(indexItem, 1);
        }
      }
    });

    setListData();
  }

  function toggleMenuFilter(item: any) {
    listCar.forEach((element) => {
      const indexItem = element.products.find((obj) => obj.key === item.key);

      if (indexItem !== undefined) {
        console.log(indexItem.key);
        toggleMenu(indexItem.key, element.category);
      }
    });

    setListData();
  }

  return (
    <Styled.Container>
      <Styled.HeaderModification>
        <h3> Shopping lista </h3>
      </Styled.HeaderModification>

      {listCar.length === 0 && (
        <Styled.NoItens>
          <strong>Sem itens</strong>
          <img src={undrawShopping} alt="Sem itens" />
        </Styled.NoItens>
      )}

      {listProducts.length === 0 ? (
        listCar.map((resp) => (
          <Styled.ListProducts key={resp.category}>
            <span>{resp.category}</span>

            {resp.products.map((item) => (
              <li key={item.key}>
                <p onClick={() => toggleMenu(item.key, resp.category)}>
                  {item.product}
                </p>
                <Styled.EditProductCart>
                  {item.quant}pc
                  <input type="radio" name="radio" id="radio" />
                  <Styled.Edit>
                    <button onClick={() => trashItem(item, resp)}>
                      <img src={trashImg} alt="icone de lixeira" />
                    </button>

                    <div>
                      <img
                        src={minusImg}
                        alt="menos"
                        onClick={() => toggleValueItem(false, item, resp)}
                      />
                      <button>{item.quant}pc</button>
                      <img
                        src={multiImg}
                        alt="mais"
                        onClick={() => toggleValueItem(true, item, resp)}
                      />
                    </div>
                  </Styled.Edit>
                </Styled.EditProductCart>
              </li>
            ))}
          </Styled.ListProducts>
        ))
      ) : (
        <Styled.ListProducts>
          {listProducts.map((item) => (
            <li key={item.key}>
              <p onClick={() => toggleMenuFilter(item)}>{item.product}</p>
              <Styled.EditProductCart>
                {item.quant}pc
                <input type="radio" name="radio" id="radio" />
                <Styled.Edit>
                  <button
                    onClick={() => toggleValueItemFilter(false, item, false)}
                  >
                    <img src={trashImg} alt="icone de lixeira" />
                  </button>

                  <div>
                    <img
                      src={minusImg}
                      alt="menos"
                      onClick={() => toggleValueItemFilter(false, item, true)}
                    />
                    <button>{item.quant}pc</button>
                    <img
                      src={multiImg}
                      alt="mais"
                      onClick={() => toggleValueItemFilter(true, item, true)}
                    />
                  </div>
                </Styled.Edit>
              </Styled.EditProductCart>
            </li>
          ))}
        </Styled.ListProducts>
      )}

      <Styled.ContainerSave>
        <div>
          <input
            type="text"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            placeholder="Pesquise"
          />
          <button onClick={searchForItem}>Save</button>
        </div>
      </Styled.ContainerSave>
    </Styled.Container>
  );
}

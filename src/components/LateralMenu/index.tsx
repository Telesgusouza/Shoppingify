import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import actionType from "../../actions";
import {
  IPropsActionShoppingCart,
  IPropsData,
  IPropsItemMenu,
  IPropsReducer,
} from "../../interfaces";

import * as Styled from "./style";

import bottle from "../../assets/shoppingify-master/source.svg";
import penImg from "../../assets/icons/pen.svg";

import trashImg from "../../assets/icons/trash.svg";
import multiImg from "../../assets/icons/xmarkYe.svg";
import minusImg from "../../assets/icons/minusYe.svg";

export default function LateralMenu() {
  const { listCar } = useSelector(
    (rootReducer: IPropsReducer) => rootReducer.useShoppingCart
  );

  const dispatch = useDispatch();

  useEffect(() => {

  });

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
        const indexObj = list.products.findIndex((obj: any) => obj === item);
        // list.products[indexObj] = item;

        const indexItem = listCar.findIndex(
          (obj: any) => obj.category === list.category
        );

        list.products.splice(indexObj, 1);

        if (list.products.length <= 0) {
          const indexListCart = listCar.findIndex((obj) => list === obj);
          listCar.splice(indexListCart, 1);
        }

        setDispatch(listCar);
      }
    }
  }

  return (
    <Styled.Container>
      <Styled.BtnoptionAddItem>
        <img src={bottle} alt="icone de viho" />
        <div>
          <p>Não encontrou o que precisa?</p>
          <button>Add item</button>
        </div>
      </Styled.BtnoptionAddItem>

      <Styled.HeaderModification>
        <h3> Shopping lista </h3>
        <img src={penImg} alt="icone de um lapis" />
      </Styled.HeaderModification>

      {listCar.map((resp) => (
        <Styled.ListProducts key={resp.category}>
          <span>{resp.category}</span>

          {resp.products.map((item) => (
            <li key={item.key}>
              {item.product}
              <Styled.EditProductCart>
                {item.quant}pc
                <input type="radio" name="radio" id="radio" />
                <Styled.Edit>
                  <button>
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

          {/* <li>
            avocado
            <Styled.EditProductCart>
              3pc
              <input type="radio" name="radio" id="radio" />
              <Styled.Edit>
                <button>
                  <img src={trashImg} alt="icone de lixeira" />
                </button>

                <div>
                  <img src={minusImg} alt="menos" />
                  <button>3pc</button>
                  <img src={multiImg} alt="mais" />
                </div>
              </Styled.Edit>
            </Styled.EditProductCart>
          </li> */}
        </Styled.ListProducts>
      ))}
      {/* 
      <Styled.ListProducts>
        <span>Frutas e Vegetais</span>

        <li>
          avocado
          <Styled.EditProductCart>
            3pc
            <input type="radio" name="radio" id="radio" />
            <Styled.Edit>
              <button>
                <img src={trashImg} alt="icone de lixeira" />
              </button>

              <div>
                <img src={minusImg} alt="menos" />
                <button>3pc</button>
                <img src={multiImg} alt="mais" />
              </div>
            </Styled.Edit>
          </Styled.EditProductCart>
        </li>

        <li>
          <p>avocado avocado avocado</p>
          <Styled.EditProductCart>
            3pc
            <input type="radio" name="radio" id="radio" />
            <Styled.Edit>
              <button>
                <img src={trashImg} alt="icone de lixeira" />
              </button>

              <div>
                <img src={minusImg} alt="menos" />
                <button>3pc</button>
                <img src={multiImg} alt="mais" />
              </div>
            </Styled.Edit>
          </Styled.EditProductCart>
        </li>
      </Styled.ListProducts>

      <Styled.ListProducts>
        <span>Frutas e Vegetais</span>

        <li>
          avocado
          <Styled.EditProductCart>
            3pc
            <input type="radio" name="radio" id="radio" />
            <Styled.Edit>
              <button>
                <img src={trashImg} alt="icone de lixeira" />
              </button>

              <div>
                <img src={minusImg} alt="menos" />
                <button>3pc</button>
                <img src={multiImg} alt="mais" />
              </div>
            </Styled.Edit>
          </Styled.EditProductCart>
        </li>
      </Styled.ListProducts> */}

      <Styled.ContainerSave>
        <div>
          <input type="text" placeholder="Pesquise" />
          <button>Save</button>
        </div>
      </Styled.ContainerSave>
    </Styled.Container>
  );
}

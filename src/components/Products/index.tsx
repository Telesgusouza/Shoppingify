import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import actionsType from "../../actions";

import searchImg from "../../assets/icons/search.svg";
import xmarkImg from "../../assets/icons/xmark.svg";
import { getDataProducts, setListData } from "../../firebase/Firestore";

import {
  IPropsDataListProducts,
  IPropsDataProduct,
  IPropsReducer,
} from "../../interfaces";

import * as Styled from "./style";

export default function Products() {
  const [dataProducts, setDataProducts] = useState<
    IPropsDataListProducts[] | []
  >([]);
  const [quantItem, setQuantItem] = useState<number>(0);
  const [inputSearch, setInputSearch] = useState<string>("");

  const [listItens, setListItens] = useState<any[]>([]);

  const { listCar } = useSelector(
    (rootReducer: IPropsReducer) => rootReducer.useShoppingCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const getData = await getDataProducts();
      setDataProducts(getData);
    }

    getProducts();
  }, []);

  function addItemCar(item: IPropsDataProduct, category: string) {
    interface IPropsListData {
      category: string;
      products: {
        key: string;
        product: string;
        quant: number;
        originalQuant: number;
      }[];
    }

    const listData: IPropsListData[] = listCar;

    const ObjExist = listData.find((obj) => obj.category === category);
    let saveItemExist = false;

    listData.forEach((element) => {
      const itemExist = element.products.find(
        (obj: {
          product: string;
          quant: number;
          key: string;
          originalQuant: number;
        }) => obj.product === item.product
      );
      saveItemExist = !!itemExist;

      // categoria existe e acrescenta
      if (element.category === category) {
        // item existe
        if (saveItemExist) {
          element.products.forEach(
            (itemCar: {
              product: string;
              quant: number;
              key: string;
              originalQuant: number;
            }) => {
              if (itemCar.product === item.product) {
                if (itemCar.quant < itemCar.originalQuant) {
                  itemCar.quant++;
                  element.products[element.products.indexOf(itemCar)] = itemCar;
                }
              }
            }
          );

          // item não existe
        } else {
          if (item.quant > 0) {
            const dataItem = {
              key: item.key,
              product: item.product,
              quant: 1,
              originalQuant: item.quant,
            };
            element.products.push(dataItem);
          }
        }
      }
    });

    // a categoria não existe

    const data = [
      {
        key: item.key,
        product: item.product,
        quant: 1,
        originalQuant: item.quant,
      },
    ];

    if (!!!ObjExist) {
      const newData = {
        category: category,
        products: data,
      };

      listData.push(newData);
    }


    dispatch({
      type: actionsType.addItemCar,
      payload: listData,
    });

    setListData();
  }

  function handleInputSearch(e: ChangeEvent<HTMLInputElement>) {
    setInputSearch(e.target.value);

    const listArray: any = [];

    dataProducts.forEach((element) => {
      element.listData.forEach((item) => {
        if (
          item.product
            .toLocaleLowerCase()
            .includes(inputSearch.toLocaleLowerCase())
        ) {
          const data = {
            category: element.category,
            data: item,
          };

          listArray.push(data);
        }
      });

      setListItens(listArray);
    });

    if (e.target.value === "") {
      setListItens([]);
    }
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <h1>
          {" "}
          <strong> Shoppingify </strong> permite que você leve sua lista de
          compras aonde quer que você vá
        </h1>
        <form>
          <button>
            <img src={searchImg} alt="imagem de search" />
          </button>
          <input
            type="text"
            onChange={(e) => handleInputSearch(e)}
            value={inputSearch}
            name="inputSearch"
            id="inputSearch"
            placeholder="Pesquisar"
          />
        </form>
      </Styled.Header>

      <Styled.ContainerOptionsMerchandise>
        {listItens.length > 0 ? (
          <article>
            <ul>
              {listItens.map((resp) => (
                <li
                  key={resp.data.key}
                  onClick={() => addItemCar(resp.data, resp.category)}
                >
                  <p>{resp.data.product}</p> <img src={xmarkImg} alt="Option" />
                </li>
              ))}
            </ul>
          </article>
        ) : (<> 
        {inputSearch === "" ?
          (dataProducts.map((prod) => (
            <article key={prod.category}>
              <h2>{prod.category}</h2>
              <ul>
                {prod.listData.map((item) => (
                  <li
                    key={item.key}
                    onClick={() => addItemCar(item, prod.category)}
                  >
                    <p>{item.product}</p> <img src={xmarkImg} alt="Option" />
                  </li>
                ))}
              </ul>
            </article>
          ))) : (<h2>Produto não encontrado....</h2>)}
          </>)}

      </Styled.ContainerOptionsMerchandise>
    </Styled.Container>
  );
}

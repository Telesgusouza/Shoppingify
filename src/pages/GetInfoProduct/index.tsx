import * as Styled from "./style";

import { IPropsGetArrayData } from "../../interfaces";
import Menu from "../../components/Menu";
import LateralMenu from "../../components/LateralMenu";

import imgBack from "../../assets/icons/arrow.svg";
import dateImg from "../../assets/icons/dateDark.svg";
import { Params, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductList } from "../../firebase/Firestore";

export default function GetInfoProduct() {
  const [listData, setListData] = useState<IPropsGetArrayData | undefined>(
    undefined
  );

  const { key }: Readonly<Params<string>> = useParams();

  useEffect(() => {
    async function getListProducts() {
      const data = await getProductList(key);
      if (data !== undefined) {
        setListData(data);
      }
    }

    getListProducts();
  }, []);


  return (
    <Styled.Container>
      <Menu page="" />

      <Styled.ContainerContent>
        <Styled.ButtonBack>
          <img src={imgBack} alt="Botão de voltar" />
          Voltar
        </Styled.ButtonBack>

        <Styled.Header>
          <img src={dateImg} alt="imagem de calendario" />
          <h1>
            {listData !== undefined &&
            Object.keys(listData).length > 0 &&
            listData.listData !== undefined
              ? listData.date
              : "Procurando"}
          </h1>
        </Styled.Header>

        <Styled.SectionList>
          {listData !== undefined &&
            Object.keys(listData).length > 0 &&
            listData.listData !== undefined &&
            listData.listData.map((resp) => (
              <article>
                <h2>{resp.category}</h2>
                <ul>
                  {resp.products.map((respItem) => (
                    <li>
                      <strong>{respItem.product}</strong>
                      <p>{respItem.quant}pc</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}

          <article>
            <h2>resp.category</h2>
            <ul>
                <li>
                  <strong>respItem.product</strong>
                  <p>4pc</p>
                </li>

                <li>
                  <strong>respItem.product</strong>
                  <p>4pc</p>
                </li>

                <li>
                  <strong>respItem.product</strong>
                  <p>4pc</p>
                </li>

                <li>
                  <strong>respItem.product</strong>
                  <p>4pc</p>
                </li>
            </ul>
          </article>
        </Styled.SectionList>
      </Styled.ContainerContent>

      <LateralMenu />
    </Styled.Container>
  );
}
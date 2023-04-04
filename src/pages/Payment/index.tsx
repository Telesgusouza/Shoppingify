import actionType from "../../actions";
import * as Styled from "./style";

import Menu from "../../components/Menu";
import { useDispatch, useSelector } from "react-redux";
import { getListDoc, IPropsArrayData } from "../../interfaces";
import { useEffect, useState } from "react";
import { getListData, handleTotalValue } from "../../firebase/Firestore";
import PaymentMethod from "../../components/PaymentMethod";

export interface IPropsReducer {
  useShoppingCart: { listCar: IPropsArrayData[] | [] };
}

export default function Payment() {
  const { listCar } = useSelector(
    (rootReducer: IPropsReducer) => rootReducer.useShoppingCart
  );

  const dispatch = useDispatch();

  const [listData, setListData] = useState<getListDoc[]>([]);
  const [totalValue, setTotalValue] = useState<string>("");

  useEffect(() => {
    async function getData() {
      const data = await getListData();
      setListData(data);
    }

    getData();
  }, []);

  useEffect(() => {
    async function getTotalValue() {
      const value = await handleTotalValue();
      setTotalValue(value.toFixed(2).replace(".", ","));
    }

    getTotalValue();
  });

  function formatNumber(num: number) {
    return num.toFixed(2).replace(".", ",");
  }

  function handlePayment() {
    dispatch({
      type: actionType.togglwBoxPayment,
      payload: true,
    });
  }

  return (
    <Styled.Container>
      <Menu page="" />

      <Styled.ContainerContent>
        <h1>
          Finalise sua <strong> compra </strong>
        </h1>

        <Styled.ListProducts>
          <ul>
            {listData.length > 0 ? (
              listData.map((resp) => (
                <li key={resp.key}>
                  <strong>{resp.product}</strong>

                  <div>
                    <p>quant: {resp.quant} </p>
                    <p> R$ {formatNumber(resp.value)} </p>
                  </div>
                </li>
              ))
            ) : (
              <h2>Não a itens no carrinho ...</h2>
            )}

            <Styled.ContainerTotal onClick={handlePayment}>
              <strong>Total: </strong>
              <p>R$ {totalValue}</p>
            </Styled.ContainerTotal>
          </ul>
        </Styled.ListProducts>
      </Styled.ContainerContent>

      {totalValue !== "0,00" && <PaymentMethod totalValue={totalValue} />}
    </Styled.Container>
  );
}

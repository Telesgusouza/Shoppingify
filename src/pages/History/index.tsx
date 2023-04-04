import actionsType from "../../actions";

import LateralMenu from "../../components/LateralMenu";
import Menu from "../../components/Menu";
import * as Styled from "./style";

import arrowImg from "../../assets/icons/arrow.png";
import dateImg from "../../assets/icons/date.svg";
import { useEffect, useState } from "react";
import { getListHistory } from "../../firebase/Firestore";
import { IPropsArrayData } from "../../interfaces";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function History() {
  const [listData, setListData] = useState<IPropsArrayData[]>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function listHistory() {
      const listData: IPropsArrayData[] | undefined = await getListHistory();

      if (listData !== undefined) {
        setListData(listData);
      }
    }

    listHistory();
  }, []);

  function handleGetInfo(info: IPropsArrayData) {
    console.log(info);

    dispatch({
      type: actionsType.infoProduct,
      payload: info,
    });
    navigate("/InfoProduct/" + info.key);
  }

  return (
    <Styled.Container>
      <Menu page="history" />

      <Styled.ContainerContent>
        <h1>Shoppinging Histórico</h1>

        <ul>
          {listData.length > 0 &&
            listData.map((product) => (
              <li onClick={() => handleGetInfo(product)}>
                <div>
                  <img src={dateImg} alt="icone de data" />
                  <strong>{product.date.slice(0, 17)}</strong>
                </div>

                <Styled.LiInfo>
                  <div>Completo</div>

                  <img src={arrowImg} alt="seta para a direita" />
                </Styled.LiInfo>
              </li>
            ))}
        </ul>
      </Styled.ContainerContent>

      <LateralMenu />
    </Styled.Container>
  );
}

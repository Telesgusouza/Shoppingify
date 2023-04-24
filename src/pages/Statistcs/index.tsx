import { useEffect, useState } from "react";
import Chart from "../../components/Chart";
import LateralMenu from "../../components/LateralMenu";
import Menu from "../../components/Menu";
import * as Styled from "./style";
import { geTopCategory, getTopProducts } from "../../firebase/Firestore";

interface IPropsData {
  product: string;
  initialValue: number;
  porcent: number;
}

export default function Statistcs() {
  const [topProducts, setTopProducts] = useState<IPropsData[] | []>([]);
  const [topCategorys, setTopCategorys] = useState<IPropsData[] | []>([]);

  useEffect(() => {
    async function getPorcents() {
      const data = await getTopProducts();
      if (data !== undefined) {
        setTopProducts(data);
      }

      const dataCategory = await geTopCategory();
      if (dataCategory !== undefined) {
        setTopCategorys(dataCategory);
      }
    }

    getPorcents();
  }, []);

  return (
    <Styled.Container>
      <Menu page="statistics" />
      <Styled.ContainerContent>
        {topProducts.length === 0 ? (
          <Styled.TextNoHistory>
            <strong>Não há itens no histórico</strong>
          </Styled.TextNoHistory>
        ) : (
          <>
            <Styled.ContainerStatistics>
              <ul>
                <h2> Top Items </h2>

                {topProducts.map((resp) => (
                  <li key={resp.product}>
                    <div>
                      <p>{resp.product}</p> <span>{resp.porcent}%</span>
                    </div>
                    <Styled.Bar loadingbar={resp.porcent} />
                  </li>
                ))}
              </ul>

              <ul>
                <h2>Top Categoria </h2>

                {topCategorys.map((resp) => (
                  <li key={resp.product}>
                    <div>
                      <p>{resp.product}</p> <span>{resp.porcent}%</span>
                    </div>
                    <Styled.Bar loadingbar={resp.porcent} category={true} />
                  </li>
                ))}
              </ul>
            </Styled.ContainerStatistics>

            <Styled.Chart itensNo>
              <div>
                <Chart />
              </div>
            </Styled.Chart>
          </>
        )}
      </Styled.ContainerContent>
      <LateralMenu />
    </Styled.Container>
  );
}

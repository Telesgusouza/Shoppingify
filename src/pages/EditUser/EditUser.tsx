import InfoUser from "../../components/InfoUser";
import ModifyUser from "../../components/EditUser";
import Menu from "../../components/Menu";
import { logOutUser } from "../../firebase/Authentication";
import * as Styled from "./style";
import { useSelector } from "react-redux";
import { IPropsRootReducer } from "../../interfaces";

export default function EditUser() {
  const { toggle } = useSelector(
    (rootReducer: IPropsRootReducer) => rootReducer.userEditUserToggle
  );

  async function logOut() {
    logOutUser();
  }


  return (
    <Styled.Container>
      <Menu page="" />

      <section>
        <Styled.ContainerContent>
          <h1>{toggle ? "Informações pessoais" : "Edite suas informações"}</h1>
          <p>Informações básicas, como seu nome e foto</p>

          {toggle ? <InfoUser /> : <ModifyUser />}

          <Styled.FooterUser>
            <button onClick={logOut}>Deslogar</button>
          </Styled.FooterUser>
        </Styled.ContainerContent>
      </section>
    </Styled.Container>
  );
}

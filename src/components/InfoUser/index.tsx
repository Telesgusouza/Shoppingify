import { useEffect, useState } from "react";
import { getDataUser } from "../../firebase/Authentication";
import { DocumentData } from "firebase/firestore";
import { useDispatch } from "react-redux";

import * as Styled from "./style";
import actionsType from '../../actions';

import imgNoUser from "../../assets/noUser.png";

export default function InfoUser() {
  const [dataUser, setDataUser] = useState<DocumentData>({});

  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const data = await getDataUser();

      if (data) {
        setDataUser(data);
      }
    }

    getData();
  }, []);

  function handleEdit() {
    dispatch({
      type: actionsType.toggleEditUser,
      payload: false
    });
  }

  return (
    <Styled.Container>
      <Styled.HeaderUser>
        <h2>Perfil</h2>
        <button onClick={handleEdit} >Edit</button>
      </Styled.HeaderUser>

      <Styled.userInfo>
        <div>
          <strong>FOTO</strong>
        </div>
        <div>
          <img
            src={dataUser.photoUrl ? dataUser.photoUrl : imgNoUser}
            alt="foto de perfil"
          />
        </div>
      </Styled.userInfo>

      <Styled.userInfo>
        <div>
          <strong>NOME</strong>
        </div>
        <div>{dataUser ? dataUser.name : "User"}</div>
      </Styled.userInfo>

      <Styled.userInfo>
        <div>
          <strong>EMAIL</strong>
        </div>
        <div>{dataUser ? dataUser.email : "carregando"}</div>
      </Styled.userInfo>
    </Styled.Container>
  );
}

import { useEffect, useState } from "react";
import { editDataUser, getDataUser } from "../../firebase/Authentication";
import { DocumentData } from "firebase/firestore";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import * as Styled from "./style";
import actionsType from "../../actions";

import imgArrow from "../../assets/icons/arrowBlue.png";
import imgNoUser from "../../assets/noUser.png";
import imgCamera from "../../assets/camera.svg";

interface IPropsDataUser {
  name: string;
  email: string;
  photoUrl?: string | undefined;
}

export default function EditUser() {
  const [dataUser, setDataUser] = useState<DocumentData>({});
  const [photoUrl, setPhotoUrl] = useState<string | null>("");
  const [photoFile, setPhotoFile] = useState<string | null>(null);
  const [name, setName] = useState<string>(dataUser.name || "");

  const [profilePhoto, setProfilePhoto] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    async function getUser() {
      const data = await getDataUser();
      if (data) {
        if (data.photoUrl !== undefined) {
          setPhotoUrl(data.photoUrl);
        }
        setDataUser(data);
        setName(data.name);
      }
    }

    getUser();
  }, []);

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement> | null) {
    if (e && e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      setProfilePhoto(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const imageUrl = reader.result as string;
        setPhotoFile(imageUrl);
      };
    }
  }

  function handleEdit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name !== "") {
      // o usuario mandou nova foto
      if (photoFile !== null) {
        editDataUser({
          email: dataUser.email,
          name: name,
          photoUrl: profilePhoto,
        });
      } else {
        // o usuario não mandou nova foto, mas ele tem foto salva
        if (photoUrl === "" && photoFile === null) {
          // ele não mandou foto e n tem salva
          editDataUser({
            email: dataUser.email,
            name: name,
          });
        } else if (photoUrl !== null) {
          editDataUser({
            email: dataUser.email,
            name: name,
            photoUrl: dataUser.photoUrl,
            photoExist: true,
          });
        }
      }
      toast.success("Alterado com sucesso!", { theme: "light" });
      setTimeout(() => {
        handleBack();
      }, 1200);
    } else {
      toast.error("Preencha o campo nome!", { theme: "light" });
    }
  }

  function handleBack() {
    dispatch({
      type: actionsType.toggleEditUser,
      payload: true,
    });
  }

  return (
    <Styled.Container>
      <Styled.ButtonBack onClick={handleBack}>
        <img src={imgArrow} alt="" />
        Voltar
      </Styled.ButtonBack>

      <Styled.ContainerContent onSubmit={handleEdit}>
        <Styled.ChangePhoto>
          <div>
            <input
              type="file"
              name="filePhoto"
              id="filePhoto"
              onChange={handlePhoto}
            />
            {!!photoUrl ? (
              <img
                src={!!photoFile ? photoFile : photoUrl}
                alt="imagem do usuario"
              />
            ) : (
              <img src={!!photoFile ? photoFile : imgNoUser} alt="imagem do usuario" loading="lazy" />
            )}

            <img src={imgCamera} alt="ilustração de camera" />
          </div>
          <strong>MUDAR FOTO</strong>
        </Styled.ChangePhoto>

        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Insira seu nome"
          />
        </div>

        <div>
          <label htmlFor="name">Email</label>
          <input
            type="text"
            name="Email"
            value={dataUser.email}
            id="Email"
            placeholder="Seu email"
            disabled
          />
        </div>

        <button type="submit">Salvar</button>
      </Styled.ContainerContent>
    </Styled.Container>
  );
}

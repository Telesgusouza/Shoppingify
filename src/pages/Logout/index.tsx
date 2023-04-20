import { useState } from "react";

import * as Styled from "./style";

import facebookImg from "../../assets/Facebook.svg";
import googleImg from "../../assets/Google.svg";
import twitterImg from "../../assets/Twitter.svg";

import userImg from "../../assets/user.svg";
import emailImg from "../../assets/email.svg";
import passwordImg from "../../assets/password.svg";
import {
  login,
  loginSocialMidia,
  register,
} from "../../firebase/Authentication";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Logout() {
  const [toggleLogin, setToggleLogin] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [filePhoto, setFilePhoto] = useState<File | null>(null);
  const [imageUser, setImageUser] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (email && password) {
      if (toggleLogin) {
        if (name) {
          register(email, password, name, filePhoto);
        } else {
          toast.error("Preencha o campo nome");
        }
      } else {
        login(email, password);
      }
    } else {
      toast.error("preencha todos os campos")
    }
  }

  function handleToggleLogin() {
    setToggleLogin((p) => !p);
  }

  function handleSocialMidia(props: "facebook" | "google") {
    loginSocialMidia(props);
  }

  function handleFile(file: React.ChangeEvent<HTMLInputElement> | null) {
    if (file && file.target.files && file.target.files.length > 0) {
      const selectedFile = file.target.files?.[0];

      setFilePhoto(selectedFile);

      if (selectedFile && selectedFile.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = () => {
          const imageUrl = reader.result as string;
          setImageUser(imageUrl);
        };
      }
    }
  }

  return (
    <Styled.Contaier>
      <Styled.FormContainer onSubmit={handleSubmit}>
        <h1>{toggleLogin ? "Cadastrar-se" : "Login"}</h1>

        {!!!filePhoto && toggleLogin && (
          <Styled.InputPhoto>
            {!!!imageUser && (
              <>
                <input
                  type="file"
                  name="file"
                  id="filephoto"
                  onChange={handleFile}
                />{" "}
              </>
            )}

            {!!imageUser && (
              <Styled.PhotoUser>
                <h1>vamo q vamo</h1>
                <img src={imageUser} alt="foto escolhida para o perfil" />
              </Styled.PhotoUser>
            )}
          </Styled.InputPhoto>
        )}

        {imageUser && (
          <Styled.PhotoUser>
            <input
              type="file"
              name="file"
              id="filephoto"
              onChange={handleFile}
            />{" "}
            <img src={imageUser} alt="foto escolhida para o perfil" />
          </Styled.PhotoUser>
        )}

        {toggleLogin && (
          <>
            <div>
              <img src={userImg} alt="senha" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome"
              />
            </div>
          </>
        )}

        <div>
          <img src={emailImg} alt="email" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div>
          <img src={passwordImg} alt="senha" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <button type="submit">
          {" "}
          {toggleLogin ? "Cadastrar-se" : "Entrar"}{" "}
        </button>

        <Styled.ContaierSocialMidia>
          <p>ou continue com esses perfis sociais</p>
          <div>
            <img
              src={facebookImg}
              alt="facebook"
              onClick={() => handleSocialMidia("facebook")}
            />
            <img
              src={googleImg}
              alt="google"
              onClick={() => handleSocialMidia("google")}
            />
          </div>
          {toggleLogin ? (
            <p>
              Já tem conta?{" "}
              <strong onClick={handleToggleLogin}> Conecte-se </strong>
            </p>
          ) : (
            <p>
              Ainda não tem conta?{" "}
              <strong onClick={handleToggleLogin}> Crie uma conta </strong>
            </p>
          )}
        </Styled.ContaierSocialMidia>
      </Styled.FormContainer>
    </Styled.Contaier>
  );
}

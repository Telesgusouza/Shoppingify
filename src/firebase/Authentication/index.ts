import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function login(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      toast.success("logado com sucesso", { theme: "light" });
    })
    .catch((err) => {
      console.error("error >>> " + err);
      if (err.message === "Firebase: Error (auth/user-not-found).") {
        toast.error("Conta não existe!", { theme: "light" });
      } else {
        toast.error("Erro verifique se sua conta!", { theme: "light" });
      }
    });
}

export function register(email: string, password: string, name: string) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((resp) => {
      setDoc(doc(db, `dataUser/${resp.user.uid}`), {
        name,
        email,
      });

      toast.success("Conta criada com sucesso!", { theme: "light" });
    })
    .catch((err) => {
      console.error("error >>> " + err.message);
      if (err.message === "Firebase: Error (auth/email-already-in-use).") {
        toast.error("Usuario já existe!", { theme: "light" });
      } else {
        toast.error("Erro verifique os dados", { theme: "light" });
      }
    });
}

interface IPropsSocialMidia {
  midia: "facebook" | "google" | "twitter";
}

export function loginSocialMidia(props: "facebook" | "google") {
  if (props === "facebook") {
    const provider = new FacebookAuthProvider();

    signInWithPopup(auth, provider).catch((err) => {
      console.error("error login facebook >>> " + err);
    });
  }

  if (props === "google") {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).catch((err) => {
      console.error("error login google >>> " + err);
    });
  }
}

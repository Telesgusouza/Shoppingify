import {
  createUserWithEmailAndPassword,
  deleteUser,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { setDoc, doc, getDoc, DocumentData } from "firebase/firestore";
import { auth, db, storage } from "../firebase";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export function login(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      toast.success("logado com sucesso", { theme: "light" });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
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

export function register(
  email: string,
  password: string,
  name: string,
  file: File | null
) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((resp) => {
      if (file) {
        const imgRef = ref(storage, `imagens/photoUser/${resp.user.uid}`);

        uploadBytes(imgRef, file).then((snapshot) => {
          getDownloadURL(imgRef).then((url) => {
            setDoc(doc(db, `dataUser/${resp.user.uid}`), {
              photoUrl: url,
              name,
              email,
            });
          });
        });
      } else {
        setDoc(doc(db, `dataUser/${resp.user.uid}`), {
          name,
          email,
        });
      }

      toast.success("Conta criada com sucesso!", { theme: "light" });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    })
    .catch((err) => {
      console.error("error >>> " + err.message);

      if (
        err.message ===
        "Firebase: Password should be at least 6 characters (auth/weak-password)."
      ) {
        toast.error("Senha deve ter no minimo 6 caracteres!", {
          theme: "light",
        });
      }
      if (err.message === "Firebase: Error (auth/email-already-in-use).") {
        toast.error("Usuario já existe!", { theme: "light" });
      } else {
        toast.error("Erro verifique os dados", { theme: "light" });
      }
    });
}

export async function loginSocialMidia(props: "facebook" | "google") {
  if (props === "facebook") {
    const provider = new FacebookAuthProvider();

    await signInWithPopup(auth, provider)
      .then(async (resp) => {
        const getData = await getDoc(doc(db, `dataUser/${resp.user.uid}`));
        if (getData.data() === undefined) {
          setDoc(doc(db, `dataUser/${resp.user.uid}`), {
            name: resp.user.displayName,
            email: resp.user.email,
          });
        }

        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((err) => {
        console.error("error login facebook >>> " + err);
        toast.error(
          "Erro ao logar com facebook, tente mais tarde ou se conecte com o google"
        );
      });
  }

  if (props === "google") {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(async (resp) => {
        const getData = await getDoc(doc(db, `dataUser/${resp.user.uid}`));
        if (getData.data() === undefined) {
          setDoc(doc(db, `dataUser/${resp.user.uid}`), {
            name: resp.user.displayName,
            email: resp.user.email,
          });
        }

        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((err) => {
        console.error("error login google >>> " + err);
      });
  }
}

export function logOutUser() {
  const user = signOut(auth);
  setTimeout(() => {
    window.location.reload();
  }, 1500);

  return !!user;
}

export async function getDataUser() {
  const user = await new Promise<User | null>((result) => {
    onAuthStateChanged(auth, (user) => {
      result(user);
    });
  });

  if (user) {
    const data = await getDoc(doc(db, `/dataUser/${user.uid}`));
    return data.data();
  }
}

export async function editDataUser(obj: any) {
  const user = await new Promise<User | null>((result) => {
    onAuthStateChanged(auth, (user) => {
      result(user);
    });
  });

  if (user) {
    // ele não mandou foto e não tem foto salva
    if (obj.photoUrl === undefined && obj.photoExist === undefined) {
      await setDoc(doc(db, `/dataUser/${user.uid}`), obj);
    } else if (obj.photoExist) {
      // usuario não mandou foto porém tem ela salva

      await setDoc(doc(db, `/dataUser/${user.uid}`), {
        email: obj.email,
        name: obj.name,
        photoUrl: obj.photoUrl,
      });
    } else if (obj.photoExist === undefined) {
      const imgRef = ref(storage, `imagens/photoUser/${user.uid}`);

      uploadBytes(imgRef, obj.photoUrl).then((snapshot) => {
        getDownloadURL(imgRef).then((url) => {
          setDoc(doc(db, `dataUser/${user.uid}`), {
            photoUrl: url,
            name: obj.name,
            email: obj.email,
          });
        });
      });
    }
  }
}

export async function getPhotoUser() {
  const user = await new Promise<User | null>((result) => {
    onAuthStateChanged(auth, (user) => {
      result(user);
    });
  });

  if (user) {
    const data: DocumentData = await getDoc(doc(db, `/dataUser/${user.uid}`));

    if (data && data.data() && data.data().photoUrl !== undefined) {
      return data.data().photoUrl;
    } else {
      return false;
    }
  }
}

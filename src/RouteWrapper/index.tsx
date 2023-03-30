import { onAuthStateChanged } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

interface IPropsRouteWrapper {
  children: React.ReactNode;
  isPrivate?: boolean;
}

export default function RouteWrapper({
  children,
  isPrivate = true,
}: IPropsRouteWrapper) {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user: DocumentData | null) => {
      const logged: boolean = user !== null;


      if (!logged && isPrivate) {
        return navigate("/");
      }

      if (logged && !isPrivate) {
        return navigate("/Initialpage");
      }
    });
  }, []);

  return <>{children}</>;
}

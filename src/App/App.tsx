import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getListCar } from "../firebase/Firestore";
import GetInfoProduct from "../pages/GetInfoProduct";
import History from "../pages/History";
import InitialPage from "../pages/InitialPage";
import Logout from "../pages/Logout";
import Payment from "../pages/Payment";
import Statistcs from "../pages/Statistcs";
import RouteWrapper from "../RouteWrapper";

function App() {
  useEffect(() => {
    async function getList() {
      const data = await getListCar();
    }

    getList();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RouteWrapper isPrivate={false}>
              {" "}
              <Logout />{" "}
            </RouteWrapper>
          }
        />
        <Route
          path="/Initialpage"
          element={
            <RouteWrapper isPrivate={true}>
              {" "}
              <InitialPage />{" "}
            </RouteWrapper>
          }
        />
        <Route
          path="/payment"
          element={
            <RouteWrapper>
              {" "}
              <Payment />{" "}
            </RouteWrapper>
          }
        />
        <Route
          path="/history"
          element={
            <RouteWrapper>
              {" "}
              <History />{" "}
            </RouteWrapper>
          }
        />
        <Route
          path="/statistcs"
          element={
            <RouteWrapper>
              {" "}
              <Statistcs />{" "}
            </RouteWrapper>
          }
        />{" "}
        <Route
          path="/InfoProduct/:key"
          element={
            <RouteWrapper>
              <GetInfoProduct />
            </RouteWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

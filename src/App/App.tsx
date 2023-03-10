import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "../pages/InitialPage";
import Logout from "../pages/Logout";
import RouteWrapper from "../RouteWrapper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<RouteWrapper isPrivate={false} > <Logout /> </RouteWrapper>} />
          <Route path="/Initialpage" element={<RouteWrapper isPrivate={true} > <InitialPage /> </RouteWrapper>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

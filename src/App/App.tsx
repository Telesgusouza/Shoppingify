import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logout from "../pages/Logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

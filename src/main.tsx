import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./index.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/stoge";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store} >
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);

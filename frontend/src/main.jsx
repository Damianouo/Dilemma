import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./store/index";
import { Provider } from "react-redux";
import ModalCtxProvider from "./contexts/ModalCtx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalCtxProvider>
        <App />
      </ModalCtxProvider>
    </Provider>
  </React.StrictMode>,
);

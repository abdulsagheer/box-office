import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryProvider } from "./Provider";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ReactQueryProvider>
          <App />
        </ReactQueryProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

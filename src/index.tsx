import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryProvider } from "./Provider";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const container = document.getElementById("root")!;
const root = createRoot(container);
let persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ReactQueryProvider>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </ReactQueryProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

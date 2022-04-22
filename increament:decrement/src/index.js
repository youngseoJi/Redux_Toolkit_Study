import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* store의 전역 상태, 전역변수를 App에서 사용할 수 있음 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

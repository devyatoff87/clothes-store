import React from "react";
import ReactDOM from "react-dom";
import AppMain from "./App/App_Main";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
const Index = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <AppMain />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

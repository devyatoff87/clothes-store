import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import storage from "redux-persist/lib/storage";
import direcotryReducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";
import layoutReducer from "./layout/layoutReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: direcotryReducer,
  shop: shopReducer,
  layout: layoutReducer,
});

export default persistReducer(persistConfig, rootReducer);

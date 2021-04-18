import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducer } from "./combineReducer";

//! agrega middlewares a nuestras acciones
const middleware = [];

// !configuracion de persistor
const persistConfig = {
  key: "root",
  storage: storage,
  whiteList: ["todo"],
};

const rootReducer = persistReducer(persistConfig, reducer);

//! creamos el store y le agregamos el compose para usar en el naveagdor el react redux
export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

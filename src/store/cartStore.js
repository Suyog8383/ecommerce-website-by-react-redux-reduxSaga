import { configureStore } from "@reduxjs/toolkit";
import productsReducer2 from "../reducer/cartSlice copy";
import productsReducer from "../reducer/cartSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Saga/rootSaga";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    products: productsReducer,
    products2: productsReducer2,
  },
  middleware: (currentMiddleware) => [
    ...currentMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

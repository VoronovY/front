import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import flatReducer from "./redusers/flatreducer";

const initState = {};

const store = createStore(flatReducer, initState, composeWithDevTools());

store.subscribe(() => {
  store.getState();
});

export default store;

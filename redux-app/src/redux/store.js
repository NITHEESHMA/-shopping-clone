import { createStore } from "redux";

import reducers from "./reducers/index";

const store = createStore(
  reducers,
  {},//no middle ware nothing here
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
import React from "react";
import { Provider } from "react-redux";

import store from "./holidu/store";
import Holidu from "./holidu";

const App = () => (
  <Provider store={store}>
    <Holidu />
  </Provider>
);

export default App;

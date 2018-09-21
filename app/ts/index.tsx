// import "core-js-pure/features/object/values"; // polyfill for Object.values etc
import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Home from "./containers/Home";
import store from "./store";

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);

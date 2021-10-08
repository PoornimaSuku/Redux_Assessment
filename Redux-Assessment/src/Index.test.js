

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import thunk from "redux-thunk";
import Store from "./Store/Store";
import { Provider } from "react-redux";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");

    div.id = "root";

    document.body.appendChild(div);

    require("./index.js");

    expect(ReactDOM.render).toHaveBeenCalledWith(
      <Provider store={Store}>
        <App />
      </Provider>,
      div
    );
  });
});



import React from "react";

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const linkElement1 = screen.getByText(/todo/i);

  expect(linkElement1).toBeInTheDocument();

  const linkElement2 = screen.getByText(/dropdown/i);

  expect(linkElement2).toBeInTheDocument();
});

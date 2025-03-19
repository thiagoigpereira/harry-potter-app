import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import HouseSelector from "../src/app/components/HouseSelector";

test("renders HouseSelector", () => {
  render(<HouseSelector />);
  expect(screen.getByText("Select your house")).toBeInTheDocument();
});

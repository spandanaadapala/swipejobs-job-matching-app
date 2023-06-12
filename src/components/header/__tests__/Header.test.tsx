import React from "react";
import { RenderResult, render, screen } from "@testing-library/react";
import Header from "../Header";

const workerName = "John Doe";

describe("Header", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const prepareHeaderTest = (workerName: string): RenderResult =>
    render(<Header workerName={workerName} />);

  it("renders correctly with worker name", () => {
    prepareHeaderTest(workerName);

    expect(screen.getByAltText("Swipejobs")).toBeDefined();
    expect(screen.getByText(workerName)).toBeDefined();
  });
});

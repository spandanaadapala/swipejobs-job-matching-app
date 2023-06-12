import { render, screen } from "@testing-library/react";
import currencyFormat from "../currancyFormat";

describe("currencyFormat", () => {
  it("formats a positive number correctly", () => {
    const value = 1234.56;
    const expectedFormattedValue = "$ 1,234.56";

    expect(currencyFormat(value)).toBe(expectedFormattedValue);
  });

  it("formats a negative number correctly", () => {
    const value = -987.65;
    const expectedFormattedValue = "$ -987.65";

    expect(currencyFormat(value)).toBe(expectedFormattedValue);
  });

  it("formats zero correctly", () => {
    const value = 0;
    const expectedFormattedValue = "$ 0.00";

    expect(currencyFormat(value)).toBe(expectedFormattedValue);
  });
});

import React from "react";
import { RenderResult, render, screen } from "@testing-library/react";
import JobPay from "../JobPay";

const jobDistanceMock = 10;
const jobPayMock = 350;
const noData = "No Data";

const expectedJobPay = `$ 350.00`;

describe("JobPay", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const prepareJobPayTest = (
    jobDistance?: number,
    jobPay?: number
  ): RenderResult =>
    render(<JobPay jobDistance={jobDistance} jobPay={jobPay} />);

  it("should render job pay attribute labels correctly", () => {
    prepareJobPayTest();

    expect(screen.findByText("Distance")).toBeDefined();
    expect(screen.findByText("Hourly Rate")).toBeDefined();
  });

  it("should render job pay and distance values correctly", () => {
    prepareJobPayTest(jobDistanceMock, jobPayMock);

    expect(screen.findByText(jobDistanceMock)).toBeDefined();
    expect(screen.findByText(expectedJobPay)).toBeDefined();
  });

  it("should render no data if there is no value passed", () => {
    prepareJobPayTest(jobDistanceMock);

    expect(screen.findByText(jobDistanceMock)).toBeDefined();
    expect(screen.findByText(noData)).toBeDefined();
  });
});

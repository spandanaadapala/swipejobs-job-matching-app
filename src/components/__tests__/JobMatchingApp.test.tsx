import { render, screen } from "@testing-library/react";
import JobMatchingApp from "../JobMatchingApp";

jest.mock("../../hooks/useMatchingJobsData", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    onPrevious: jest.fn(),
    onNext: jest.fn(),
    jobs: [],
    workerName: "John Doe",
    currentJob: null,
    currentJobIndex: 0,
    handleReject: jest.fn(),
    handleAccept: jest.fn(),
    alertData: null,
    handleAlertClose: jest.fn(),
  })),
}));

jest.mock("../header/Header", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="header" />),
}));

jest.mock("../AlertBar", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="AlertBar" />),
}));

jest.mock("../jobDetails/JobDetails", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="JobDetails" />),
}));

describe("JobMatchingApp", () => {
  const prepareJobMatchingAppTest = () => render(<JobMatchingApp />);

  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should render components on screen", () => {
    prepareJobMatchingAppTest();

    expect(screen.findByTestId("header")).toBeDefined();
    expect(screen.findByTestId("jobDetails")).toBeDefined();
    expect(screen.findByTestId("alertBar")).toBeDefined();
  });
});

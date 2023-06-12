import { render, screen } from "@testing-library/react";
import JobDetails, { JobDetailsProps } from "../JobDetails";
import { jobDataMock } from "../../../mocks/jobDataMock";

const onNextMock: jest.Mock = jest.fn();
const onPreviosMock: jest.Mock = jest.fn();
const handleRejectMock: jest.Mock = jest.fn();
const handleAcceptMock: jest.Mock = jest.fn();

jest.mock("../JobTitle", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="JobTitle" />),
}));

jest.mock("../JobPay", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="JobPay" />),
}));

jest.mock("../JobSpecifics", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="JobSpecifics" />),
}));

jest.mock("../../actions/JobActions", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="JobActions" />),
}));

jest.mock("../../actions/NavigationButtons", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="NavigationButtons" />),
}));

describe("JobDetails", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const prepareJobDetailstest = ({
    jobs,
    currentJob,
    currentJobIndex,
    onPrevious,
    onNext,
    handleAccept,
    handleReject,
  }: JobDetailsProps) =>
    render(
      <JobDetails
        jobs={jobs}
        currentJob={currentJob}
        currentJobIndex={currentJobIndex}
        onPrevious={onPrevious}
        onNext={onNext}
        handleReject={handleReject}
        handleAccept={handleAccept}
      />
    );

  test("renders job details correctly", () => {
    const currentJobIndex = 0;

    prepareJobDetailstest({
      jobs: jobDataMock,
      currentJob: jobDataMock[currentJobIndex],
      currentJobIndex,
      onPrevious: onPreviosMock,
      onNext: onNextMock,
      handleAccept: handleAcceptMock,
      handleReject: handleRejectMock,
    });

    expect(screen.findByTestId("JobTitle")).toBeDefined();
    expect(screen.findByTestId("JobPay")).toBeDefined();
    expect(screen.findByTestId("JobSpecifics")).toBeDefined();
    expect(screen.findByTestId("JobActions")).toBeDefined();
    expect(screen.findByTestId("NavigationButtons")).toBeDefined();
  });
});

import { renderHook, act } from "@testing-library/react-hooks";
import userProfile from "../../services/userProfile";
import matchJobs from "../../services/matchJobs";
import { acceptJob, rejectJob } from "../../services/machingJobActions";
import useMatchingJobsData from "../useMatchingJobsData";
import { profileDateMock } from "../../mocks/profileDataMock";
import { jobDataMock } from "../../mocks/jobDataMock";
import { acceptJobMock } from "../../mocks/acceptJobMock";
import {
  HorizontalEnum,
  SeverityEnum,
  VerticalEnum,
} from "../../types/AlertDataType";
import { rejectJobMock } from "../../mocks/rejectJobMock";

const mockProfileResponse = profileDateMock;
const mockMatchingJobsResponse = jobDataMock;
const mockAcceptJobResponse = acceptJobMock;
const mockRejectJobResponse = rejectJobMock;

jest.mock("../../services/userProfile", () => ({
  __esModule: true,
  default: jest.fn(() => mockProfileResponse),
}));

jest.mock("../../services/matchJobs", () => ({
  __esModule: true,
  default: jest.fn(() => Promise.resolve(mockMatchingJobsResponse)),
}));

jest.mock("../../services/machingJobActions", () => ({
  __esModule: true,
  acceptJob: jest.fn((id) => mockAcceptJobResponse),
  rejectJob: jest.fn((id) => mockRejectJobResponse),
}));

describe("useMatchingJobsData", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("fetches user profile and matching jobs on mount", async () => {
    renderHook(() => useMatchingJobsData());

    expect(userProfile).toHaveBeenCalledTimes(1);
    expect(matchJobs).toHaveBeenCalledTimes(1);
  });

  test("sets initial state correctly", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useMatchingJobsData()
    );

    expect(result.current.profile).toBeUndefined();
    expect(result.current.jobs).toEqual([]);

    await waitForNextUpdate();

    expect(result.current.jobs).toBe(mockMatchingJobsResponse);
    expect(result.current.profile).toBe(mockProfileResponse);
    expect(result.current.currentJob).toBe(mockMatchingJobsResponse[0]);
    expect(result.current.currentJobIndex).toBe(0);
    expect(result.current.workerName).toBe("abc pqr");
    expect(result.current.alertData).toEqual({
      open: false,
      vertical: VerticalEnum.TOP,
      horizontal: HorizontalEnum.CENTER,
      severity: SeverityEnum.SUCCESS,
      message: "",
    });
  });

  test("don't set cuurent job and currentjob index if there are no matching jobs", async () => {
    jest.mock("../../services/matchJobs", () => ({
      __esModule: true,
      default: jest.fn(() => []),
    }));
    const { result } = renderHook(() => useMatchingJobsData());

    expect(result.current.currentJob).toBeUndefined();
    expect(result.current.currentJobIndex).toEqual(-1);
  });

  test("handles onPrevious correctly", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useMatchingJobsData()
    );

    await waitForNextUpdate();

    act(() => {
      result.current.onPrevious();
    });

    expect(result.current.currentJobIndex).toBe(0);
    expect(result.current.currentJob).toEqual(mockMatchingJobsResponse[0]);
  });

  test("handles onNext correctly", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useMatchingJobsData()
    );

    await waitForNextUpdate();

    act(() => {
      result.current.onNext();
    });

    expect(result.current.currentJobIndex).toBe(1);
    expect(result.current.currentJob).toEqual(mockMatchingJobsResponse[1]);
  });

  test("handles handleReject correctly", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useMatchingJobsData()
    );

    await waitForNextUpdate();

    await act(async () => {
      await result.current.handleReject("5775d8e18a488e6c5bb08333");
    });

    expect(rejectJob).toHaveBeenCalledTimes(1);
    expect(rejectJob).toHaveBeenCalledWith("5775d8e18a488e6c5bb08333");
    expect(result.current.alertData).toMatchObject({
      open: true,
      vertical: "top",
      horizontal: "center",
      severity: "success",
      message: "This Action is Successful",
    });
  });

  test("handles handleAccept correctly", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useMatchingJobsData()
    );

    await waitForNextUpdate();

    await act(async () => {
      await result.current.handleAccept("5775d8e18a488e6c5bb08333");
    });

    expect(acceptJob).toHaveBeenCalledTimes(1);
    expect(acceptJob).toHaveBeenCalledWith("5775d8e18a488e6c5bb08333");
    expect(result.current.alertData).toMatchObject({
      horizontal: "center",
      message: "Sorry, this role was no longer available",
      open: true,
      severity: "error",
      vertical: "top",
    });
  });

  test("handles alert close correctly", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useMatchingJobsData()
    );

    await waitForNextUpdate();

    await act(async () => {
      await result.current.handleAlertClose();
    });

    expect(result.current.alertData).toMatchObject({
      open: false,
    });
  });
});

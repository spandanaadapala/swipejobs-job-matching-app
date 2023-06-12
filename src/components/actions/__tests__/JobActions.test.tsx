import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import JobActions, { JobActionsProps } from "../JobActions";

const handleRejectMock = jest.fn();
const handleAcceptMock = jest.fn();
const currentJobIdMock = "1";

describe("JobActions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const prepareJobActionsTest = ({
    handleAccept,
    handleReject,
    currentJobId,
  }: JobActionsProps) =>
    render(
      <JobActions
        handleReject={handleReject}
        handleAccept={handleAccept}
        currentJobId={currentJobId}
      />
    );

  test("calls handleReject correctly", async () => {
    prepareJobActionsTest({
      handleAccept: handleAcceptMock,
      handleReject: handleRejectMock,
      currentJobId: currentJobIdMock,
    });
    await waitFor(() => {
      fireEvent.click(screen.getByTestId("rejectButton"));
    });

    expect(handleRejectMock).toHaveBeenCalled();
    expect(handleRejectMock).toHaveBeenCalledWith(currentJobIdMock);
  });

  test("calls handleAccept correctly", async () => {
    prepareJobActionsTest({
      handleAccept: handleAcceptMock,
      handleReject: handleRejectMock,
      currentJobId: currentJobIdMock,
    });
    await waitFor(() => {
      fireEvent.click(screen.getByTestId("acceptButton"));
    });

    expect(handleAcceptMock).toHaveBeenCalled();
    expect(handleAcceptMock).toHaveBeenCalledWith(currentJobIdMock);
  });
});

import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AlertBar from "../AlertBar";
import {
  AlertDataType,
  HorizontalEnum,
  SeverityEnum,
  VerticalEnum,
} from "../../types/AlertDataType";

const mockAlertData = {
  vertical: VerticalEnum.TOP,
  horizontal: HorizontalEnum.CENTER,
  open: true,
  severity: SeverityEnum.ERROR,
  message: "Test Error Message",
};

const mockHandleClose: jest.Mock = jest.fn();

describe("AlertBar", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const prepareAlertBarTest = (
    alertData: AlertDataType,
    handleClose: () => void
  ) =>
    act(() =>
      render(<AlertBar alertData={alertData} handleAlertClose={handleClose} />)
    );

  it("should render the alert message correctly", () => {
    prepareAlertBarTest(mockAlertData, mockHandleClose);

    expect(screen.getByText(mockAlertData.message)).toBeDefined();
  });

  it("should not render the alert when open is set to false", () => {
    const mockAlertDataOpenFalse = { ...mockAlertData, open: false };
    prepareAlertBarTest(mockAlertDataOpenFalse, mockHandleClose);

    expect(screen.queryByRole("alert")).toBeNull();
  });
});

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import NavigationButtons, {
  NavigationButtonsProps,
} from "../NavigationButtons";

const onPreviousMock = jest.fn();
const onNextMock = jest.fn();
const currentJobIndexMock = 0;
const numberOfJobsMock = 5;

describe("NavigationButtons", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const prepareNavigationButtonsTest = ({
    onPrevious,
    onNext,
    currentJobIndex,
    numberOfJobs,
  }: NavigationButtonsProps) =>
    render(
      <NavigationButtons
        onPrevious={onPrevious}
        onNext={onNext}
        currentJobIndex={currentJobIndex}
        numberOfJobs={numberOfJobs}
      />
    );

  test("clicking previous button shouldn't call onPrevious function when current index is zero", async () => {
    prepareNavigationButtonsTest({
      onPrevious: onPreviousMock,
      onNext: onNextMock,
      currentJobIndex: currentJobIndexMock,
      numberOfJobs: numberOfJobsMock,
    });
    await waitFor(() => fireEvent.click(screen.getByTestId("previousButton")));

    expect(onPreviousMock).not.toHaveBeenCalled();
  });
  test("clicking previous button calls onPrevious function", async () => {
    prepareNavigationButtonsTest({
      onPrevious: onPreviousMock,
      onNext: onNextMock,
      currentJobIndex: 2,
      numberOfJobs: numberOfJobsMock,
    });
    await waitFor(() => fireEvent.click(screen.getByTestId("previousButton")));

    expect(onPreviousMock).toHaveBeenCalled();
  });

  test("clicking next button shouldn't call onNext function when current index is equal tonumber of jobs", async () => {
    prepareNavigationButtonsTest({
      onPrevious: onPreviousMock,
      onNext: onNextMock,
      currentJobIndex: 5,
      numberOfJobs: numberOfJobsMock,
    });
    await waitFor(() => fireEvent.click(screen.getByTestId("nextButton")));

    expect(onNextMock).toHaveBeenCalled();
  });

  test("clicking next button calls onNext function", async () => {
    prepareNavigationButtonsTest({
      onPrevious: onPreviousMock,
      onNext: onNextMock,
      currentJobIndex: currentJobIndexMock,
      numberOfJobs: numberOfJobsMock,
    });
    await waitFor(() => fireEvent.click(screen.getByTestId("nextButton")));

    expect(onNextMock).toHaveBeenCalled();
  });
});

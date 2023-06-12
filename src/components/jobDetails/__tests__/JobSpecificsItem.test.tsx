import { render, screen } from "@testing-library/react";
import JobSpecificsItem from "../JobSpecificsItem";

const mockIcon: any = jest
  .fn()
  .mockReturnValue(<div data-testid="mock-icon" />);
const mockTitle = "Test Title";
const mockChildren = "Test Children";
const noData = "No Data";

describe("JobSpecificsItem", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const prepareJobSprcificsItemTest = (
    icon: any,
    title: string,
    children?: string
  ) =>
    render(
      <JobSpecificsItem icon={icon} title={title}>
        {children}
      </JobSpecificsItem>
    );

  it("should render the title and children correctly", () => {
    prepareJobSprcificsItemTest(mockIcon, mockTitle, mockChildren);

    expect(mockIcon).toHaveBeenCalledTimes(1);
    expect(screen.getByText(mockTitle)).toBeDefined();
    expect(screen.getByText(mockChildren)).toBeDefined();
  });

  it('should render "No Data" when children are not provided', () => {
    prepareJobSprcificsItemTest(mockIcon, mockTitle);

    expect(mockIcon).toHaveBeenCalledTimes(1);
    expect(screen.getByText(noData)).toBeDefined();
  });
});

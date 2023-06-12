import { render, screen } from "@testing-library/react";
import JobSpecifics, { JobSpecificsProps } from "../JobSpecifics";
import { jobDataMock } from "../../../mocks/jobDataMock";

describe("JobSpecifics", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const prepareJobSpecificsTest = ({
    shifts,
    location,
    requirements,
    reportName,
    reportContact,
  }: JobSpecificsProps) =>
    render(
      <JobSpecifics
        shifts={shifts}
        location={location}
        requirements={requirements}
        reportName={reportName}
        reportContact={reportContact}
      />
    );
  test("renders all job details correctly", () => {
    const currentJob = jobDataMock[1];
    prepareJobSpecificsTest({
      shifts: currentJob.shifts,
      location: currentJob.company.address.formattedAddress,
      requirements: currentJob.requirements,
      reportName: currentJob.company.reportTo.name,
      reportContact: currentJob.company.reportTo?.phone ?? "",
    });

    const shiftDates = screen.getAllByText(
      /(\w{3} \d{2}, \w{3} \d{2}:\d{2} [AP]M)/g
    );
    expect(shiftDates).toHaveLength(10);
    expect(
      screen.getByText(currentJob.company.address.formattedAddress)
    ).toBeDefined();

    const requirementItems = screen.getAllByText(/- .+/g);
    expect(requirementItems).toHaveLength(2);
    expect(screen.findByText("- Safety Vest")).toBeDefined();
    expect(screen.findByText("- Hart Hat")).toBeDefined();
    expect(screen.findByText(currentJob.company.reportTo.name)).toBeDefined();
  });
});

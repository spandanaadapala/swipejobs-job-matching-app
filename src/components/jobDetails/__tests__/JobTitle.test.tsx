import { RenderResult, render, screen } from "@testing-library/react";
import JobTitle from "../JobTitle";

interface CustomHTMLElement extends HTMLElement {
  src: string;
}

const jobName = "Software Engineer";
const jobCompany = "swipejobs";
const jobUrl = "https://example.com/image.png";

describe("JobTitle component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const prepareJobTitleTest = (
    jobName?: string,
    jobCompany?: string,
    jobUrl?: string
  ): RenderResult =>
    render(
      <JobTitle jobUrl={jobUrl} jobName={jobName} jobCompany={jobCompany} />
    );

  test("renders job title and company correctly", () => {
    prepareJobTitleTest(jobName, jobCompany);

    expect(screen.getByText(jobName)).toBeDefined();
    expect(screen.getByText(jobCompany)).toBeDefined();
  });

  test("renders job image correctly", () => {
    prepareJobTitleTest(jobName, jobCompany, jobUrl);

    const imageElement: CustomHTMLElement = screen.getByAltText(jobName);

    expect(imageElement).toBeDefined();
    expect(imageElement.src).toBe(jobUrl);
  });
});

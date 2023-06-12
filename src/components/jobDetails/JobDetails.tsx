import { Box } from "@mui/material";
import { matchJobsType } from "../../types/MatchJobsType";
import JobTitle from "./JobTitle";
import JobPay from "./JobPay";
import JobSpecifics from "./JobSpecifics";
import JobActions from "../actions/JobActions";
import NavigationButtons from "../actions/NavigationButtons";

export interface JobDetailsProps {
  jobs: matchJobsType[];
  currentJob: matchJobsType | undefined;
  currentJobIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  handleReject: (jobId: string) => void;
  handleAccept: (jobId: string) => void;
}

const JobDetails = (props: JobDetailsProps) => {
  const {
    onNext,
    onPrevious,
    jobs,
    currentJob,
    currentJobIndex,
    handleAccept,
    handleReject,
  } = props;

  return (
    <Box sx={{ border: "15px solid lightgrey" }}>
      <JobTitle
        jobName={currentJob?.jobTitle?.name}
        jobCompany={currentJob?.company?.name}
        jobUrl={currentJob?.jobTitle?.imageUrl}
      />
      <JobPay
        jobDistance={currentJob?.milesToTravel}
        jobPay={currentJob?.wagePerHourInCents}
      />
      <JobSpecifics
        shifts={currentJob?.shifts ?? []}
        location={currentJob?.company?.address?.formattedAddress ?? ""}
        requirements={currentJob?.requirements}
        reportName={currentJob?.company?.reportTo?.name ?? ""}
        reportContact={currentJob?.company?.reportTo?.phone ?? ""}
      />
      <JobActions
        handleReject={handleReject}
        handleAccept={handleAccept}
        currentJobId={currentJob?.jobId ?? ""}
      />
      <NavigationButtons
        onNext={onNext}
        onPrevious={onPrevious}
        currentJobIndex={currentJobIndex}
        numberOfJobs={jobs.length}
      />
    </Box>
  );
};

export default JobDetails;

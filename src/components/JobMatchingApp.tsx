import useMatchingJobsData from "../hooks/useMatchingJobsData";
import AlertBar from "./AlertBar";
import JobDetails from "./jobDetails/JobDetails";
import Header from "./header/Header";

const JobMatchingApp = () => {
  const {
    onPrevious,
    onNext,
    jobs,
    workerName,
    currentJob,
    currentJobIndex,
    handleReject,
    handleAccept,
    alertData,
    handleAlertClose,
  } = useMatchingJobsData();

  return (
    <>
      <Header workerName={workerName} />
      <JobDetails
        onNext={onNext}
        onPrevious={onPrevious}
        currentJobIndex={currentJobIndex}
        jobs={jobs}
        currentJob={currentJob}
        handleReject={handleReject}
        handleAccept={handleAccept}
      />
      <AlertBar alertData={alertData} handleAlertClose={handleAlertClose} />
    </>
  );
};

export default JobMatchingApp;

import { useEffect, useState } from "react";
import userProfile from "../services/userProfile";
import { UserProfileType } from "../types/UserProfileType";
import matchJobs from "../services/matchJobs";
import { matchJobsType } from "../types/MatchJobsType";
import { acceptJob, rejectJob } from "../services/machingJobActions";
import {
  AlertDataType,
  HorizontalEnum,
  SeverityEnum,
  VerticalEnum,
} from "../types/AlertDataType";

const useMatchingJobsData = () => {
  const [jobs, setJobs] = useState<matchJobsType[]>([]);
  const [currentJob, setCurrentJob] = useState<matchJobsType | undefined>(
    undefined
  );
  const [currentJobIndex, setCurrentJobIndex] = useState<number>(-1);
  const [profile, setProfile] = useState<UserProfileType>();
  const [alertData, setAlertData] = useState<AlertDataType>({
    open: false,
    vertical: VerticalEnum.TOP,
    horizontal: HorizontalEnum.CENTER,
    severity: SeverityEnum.SUCCESS,
    message: "",
  });

  useEffect(() => {
    const getProfileData = async () => {
      const profileData = await userProfile();
      setProfile(profileData);
    };

    const getJobsData = async () => {
      const jobsData = await matchJobs();
      setJobs(jobsData);
      if (jobsData) {
        setCurrentJob(jobsData[0]);
        setCurrentJobIndex(0);
      }
    };
    getProfileData();
    getJobsData();
  }, []);

  const onPrevious = () => {
    console.info(currentJobIndex);
    if (currentJobIndex > 0) {
      setCurrentJobIndex(currentJobIndex - 1);
      setCurrentJob(jobs[currentJobIndex - 1]);
    }
  };

  const onNext = () => {
    if (currentJobIndex < jobs.length - 1) {
      setCurrentJobIndex(currentJobIndex + 1);
      setCurrentJob(jobs[currentJobIndex + 1]);
    }
  };

  const handleReject = async (jobId: string) => {
    const rejectResponse = await rejectJob(jobId);
    setAlertData((prevState) => ({
      ...prevState,
      open: true,
      severity: rejectResponse.success
        ? SeverityEnum.SUCCESS
        : SeverityEnum.ERROR,
      message: rejectResponse.message
        ? rejectResponse.message
        : "This Action is Successful",
    }));
  };

  const handleAccept = async (jobId: string) => {
    const acceptResponse = await acceptJob(jobId);
    setAlertData((prevState) => ({
      ...prevState,
      open: true,
      severity: acceptResponse.success
        ? SeverityEnum.SUCCESS
        : SeverityEnum.ERROR,
      message: acceptResponse.message
        ? acceptResponse.message
        : "This Action is Successful",
    }));
  };

  const handleAlertClose = () =>
    setAlertData((prevState) => ({ ...prevState, open: false }));

  const workerName = () => {
    const firstName = profile?.firstName ?? "";
    const lastName = profile?.lastName ?? "";
    return `${firstName} ${lastName}`;
  };

  return {
    onPrevious,
    onNext,
    jobs,
    workerName: workerName(),
    currentJob,
    currentJobIndex,
    profile,
    handleReject,
    handleAccept,
    alertData,
    handleAlertClose,
  };
};

export default useMatchingJobsData;

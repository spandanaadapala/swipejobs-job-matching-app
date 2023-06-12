import axios from "axios";
import { MATCHING_JOBS_URL } from "../constants/urls";
import { WORKER_ID } from "../constants/workerConfig";
import makeUrl from "../utils/makeUrl";
import { matchJobsType } from "../types/MatchJobsType";

const matchJobs = async (): Promise<matchJobsType[]> => {
  const endPoint = makeUrl(MATCHING_JOBS_URL, { workerId: WORKER_ID });
  const response = await axios.get(endPoint);
  return response?.data;
};

export default matchJobs;

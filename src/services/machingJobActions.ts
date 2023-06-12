import axios from "axios";
import { ACCEPT_JOB_URL, REJECT_JOB_URL } from "../constants/urls";
import { WORKER_ID } from "../constants/workerConfig";
import makeUrl from "../utils/makeUrl";
import { JobActionsResponseType } from "../types/JobActionsResponseType";

export const acceptJob = async (
  jobId: string
): Promise<JobActionsResponseType> => {
  const endPoint = makeUrl(ACCEPT_JOB_URL, { workerId: WORKER_ID, jobId });
  const response = await axios.get(endPoint);
  return response?.data;
};

export const rejectJob = async (
  jobId: string
): Promise<JobActionsResponseType> => {
  const endPoint = makeUrl(REJECT_JOB_URL, { workerId: WORKER_ID, jobId });
  const response = await axios.get(endPoint);
  return response?.data;
};

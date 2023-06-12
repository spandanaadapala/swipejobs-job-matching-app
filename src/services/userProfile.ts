import axios from "axios";
import { USER_PROFILE_URL } from "../constants/urls";
import { WORKER_ID } from "../constants/workerConfig";
import { UserProfileType } from "../types/UserProfileType";
import makeUrl from "../utils/makeUrl";

const userProfile = async (): Promise<UserProfileType> => {
  const endPoint = makeUrl(USER_PROFILE_URL, { workerId: WORKER_ID });
  const response = await axios.get(endPoint);
  return response?.data;
};

export default userProfile;

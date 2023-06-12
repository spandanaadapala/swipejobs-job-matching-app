import axios from "axios";
import { acceptJob, rejectJob } from "../machingJobActions";
import { acceptJobMock } from "../../mocks/acceptJobMock";
import { rejectJobMock } from "../../mocks/rejectJobMock";

const mockedAcceptResponse = {
  data: acceptJobMock,
};

const mockedRejectResponse = {
  data: rejectJobMock,
};

jest.mock("axios");

describe("matchingJobActions", () => {
  describe("acceptJob", () => {
    test("returns the accept job data", async () => {
      const mAxiosGet = axios.get as jest.MockedFunction<typeof axios.get>;

      mAxiosGet.mockResolvedValue(mockedAcceptResponse);

      const result = await acceptJob("123");

      expect(result).toEqual(mockedAcceptResponse.data);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        "https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/job/123/accept"
      );
    });
  });

  describe("rejectJob", () => {
    test("returns the reject job data", async () => {
      const mAxiosGet = axios.get as jest.MockedFunction<typeof axios.get>;

      mAxiosGet.mockResolvedValue(mockedRejectResponse);

      const result = await rejectJob("123");

      expect(result).toEqual(mockedRejectResponse.data);
      expect(axios.get).toHaveBeenCalledWith(
        "https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/job/123/reject"
      );
    });
  });
});

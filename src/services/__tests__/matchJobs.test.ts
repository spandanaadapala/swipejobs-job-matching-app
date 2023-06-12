import axios from "axios";
import matchJobs from "../matchJobs";
import { jobDataMock } from "../../mocks/jobDataMock";

const mockedResponse = {
  data: jobDataMock,
};

jest.mock("axios");

describe("matchJobs", () => {
  test("returns the match jobs data", async () => {
    const mAxiosGet = axios.get as jest.MockedFunction<typeof axios.get>;

    mAxiosGet.mockResolvedValue(mockedResponse);

    const result = await matchJobs();

    expect(result).toEqual(mockedResponse.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/matches"
    );
  });
});

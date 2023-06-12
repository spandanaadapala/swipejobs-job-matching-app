import axios from "axios";
import userProfile from "../userProfile";
import { profileDateMock } from "../../mocks/profileDataMock";

const mockedResponse = {
  data: profileDateMock,
};

jest.mock("axios");

describe("userProfile", () => {
  test("returns the user profile data", async () => {
    const mAxiosGet = axios.get as jest.MockedFunction<typeof axios.get>;

    mAxiosGet.mockResolvedValue(mockedResponse);

    const result = await userProfile();

    expect(result).toEqual(mockedResponse.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/profile"
    );
  });
});

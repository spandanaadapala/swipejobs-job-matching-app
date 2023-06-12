import {
  ACCEPT_JOB_URL,
  BASE_URL,
  USER_PROFILE_URL,
} from "../../constants/urls";
import makeUrl from "../makeUrl";

describe("makeUrl", () => {
  it("replaces URL placeholders with one value", () => {
    const values = {
      workerId: "123",
    };
    const expectedUrl = `${BASE_URL}/api/worker/123/profile`;

    expect(makeUrl(USER_PROFILE_URL, values)).toBe(expectedUrl);
  });

  it("replaces URL placeholders with multiple value", () => {
    const values = {
      workerId: "123",
      jobId: "999",
    };
    const expectedUrl = `${BASE_URL}/api/worker/123/job/999/accept`;

    expect(makeUrl(ACCEPT_JOB_URL, values)).toBe(expectedUrl);
  });
});

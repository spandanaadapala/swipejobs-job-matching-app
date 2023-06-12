import phoneNumberFormat from "../phoneNumberFormat";

describe("phoneNumberFormat", () => {
  it("formats a phone number correctly", () => {
    const phoneNumber = "1234567890";
    const expectedFormattedNumber = "(123) 456 7890";

    expect(phoneNumberFormat(phoneNumber)).toBe(expectedFormattedNumber);
  });

  it("handles a phone number with fewer than 10 digits", () => {
    const phoneNumber = "123456";
    const expectedFormattedNumber = "(123) 456 ";

    expect(phoneNumberFormat(phoneNumber)).toBe(expectedFormattedNumber);
  });

  it("handles a phone number with more than 10 digits", () => {
    const phoneNumber = "123456789012345";
    const expectedFormattedNumber = "(123) 456 7890";

    expect(phoneNumberFormat(phoneNumber)).toBe(expectedFormattedNumber);
  });
});

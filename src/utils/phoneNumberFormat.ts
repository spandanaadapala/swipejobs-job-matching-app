const phoneNumberFormat = (phoneNumber: string): string =>
  `(${phoneNumber.substring(0, 3)}) ${phoneNumber.substring(
    3,
    6
  )} ${phoneNumber.substring(6, 10)}`;
export default phoneNumberFormat;

export interface Address {
  formattedAddress: string;
  zoneId: string;
}

export interface UserProfileType {
  address: Address;
  email: string;
  firstName: string;
  lastName: string;
  maxJobDistance: number;
  phoneNumber: string;
  workerId: string;
}

import { Address } from "./UserProfileType";

interface JobTitle {
  name: string;
  imageUrl: string;
}

interface Company {
  name: string;
  address: Address;
  reportTo: ReportTo;
}

interface ReportTo {
  name: string;
  phone?: string;
}

export interface Shifts {
  startDate: string;
  endDate: string;
}

export interface matchJobsType {
  jobId: string;
  jobTitle: JobTitle;
  company: Company;
  wagePerHourInCents: number;
  milesToTravel: number;
  shifts: Shifts[];
  branch: string;
  branchPhoneNumber: string;
  requirements?: string[];
}

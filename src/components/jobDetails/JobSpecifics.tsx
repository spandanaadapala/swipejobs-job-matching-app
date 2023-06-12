import { Box } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ConstructionIcon from "@mui/icons-material/Construction";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Moment from "moment";
import { Shifts } from "../../types/MatchJobsType";
import phoneNumberFormat from "../../utils/phoneNumberFormat";
import JobSpecificsItem from "./JobSpecificsItem";

export interface JobSpecificsProps {
  shifts: Shifts[];
  location: string;
  requirements?: string[];
  reportName: string;
  reportContact: string;
}

const JobSpecifics = (props: JobSpecificsProps) => {
  const { shifts, location, requirements, reportName, reportContact } = props;

  const reportToDetails = reportContact
    ? `${reportName} ${phoneNumberFormat(reportContact)}`
    : reportName;

  return (
    <>
      <JobSpecificsItem icon={CalendarMonthIcon} title={"Shift Dates"}>
        {shifts?.map((shift, index) => (
          <Box key={index}>
            {Moment(shift.startDate).format("MMM DD, ddd HH:ss A ")} -
            {Moment(shift.endDate).format("HH:ss A ")}
          </Box>
        ))}
      </JobSpecificsItem>

      <JobSpecificsItem icon={LocationOnIcon} title={"Location"}>
        {location}
      </JobSpecificsItem>

      <JobSpecificsItem icon={ConstructionIcon} title={"Requirements"}>
        {requirements?.map((requirement, index) => (
          <Box key={index}>{`- ${requirement}`}</Box>
        ))}
      </JobSpecificsItem>

      <JobSpecificsItem icon={AccountCircleRoundedIcon} title={"Reports To"}>
        {reportToDetails}
      </JobSpecificsItem>
    </>
  );
};

export default JobSpecifics;

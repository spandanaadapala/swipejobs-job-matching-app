import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface JobTitleProps {
  jobName?: string;
  jobCompany?: string;
  jobUrl?: string;
}

const JobTitle = (props: JobTitleProps) => {
  const { jobName, jobCompany, jobUrl } = props;
  return (
    <Card variant="outlined">
      <CardMedia component="img" height="250" src={jobUrl} alt={jobName} />
      <CardContent>
        <Typography variant="h4">{jobName}</Typography>
        <Typography variant="h5">{jobCompany}</Typography>
      </CardContent>
    </Card>
  );
};

export default JobTitle;

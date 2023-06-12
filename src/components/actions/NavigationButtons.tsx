import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";

const getStyles = () => ({
  leftArrow: {
    top: "80%",
    position: "absolute",
    left: "1.5%",
  },
  rightArrow: {
    top: "80%",
    position: "absolute",
    left: "92%",
  },
});

export interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  currentJobIndex: number;
  numberOfJobs: number;
}

function NavigationButtons(props: NavigationButtonsProps) {
  const { onPrevious, onNext, currentJobIndex, numberOfJobs } = props;
  const styles = getStyles();
  return (
    <>
      <IconButton
        size="large"
        disabled={currentJobIndex === 0}
        sx={styles.leftArrow}
        onClick={onPrevious}
        data-testid="previousButton"
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        disabled={currentJobIndex === numberOfJobs - 1}
        size="large"
        sx={styles.rightArrow}
        onClick={onNext}
        data-testid="nextButton"
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </>
  );
}

export default NavigationButtons;

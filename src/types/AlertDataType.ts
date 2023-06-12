export interface AlertDataType {
  open: boolean;
  vertical: VerticalEnum;
  horizontal: HorizontalEnum;
  severity: SeverityEnum;
  message: string;
}

export enum VerticalEnum {
  TOP = "top",
  BOTTOM = "bottom",
}

export enum HorizontalEnum {
  CENTER = "center",
  RIGHT = "right",
  LEFT = "left",
}

export enum SeverityEnum {
  SUCCESS = "success",
  ERROR = "error",
}

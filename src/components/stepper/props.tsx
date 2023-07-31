import { SxProps } from "@mui/material";

export interface StepData {
  label: string;
  status: 'start' | 'inprogress' | 'completed' | 'rejected';
  content?: string | React.ReactNode;
  color?: string;
  icon?: string | React.ReactNode | SVGRectElement;
  completeBadge?: React.ReactNode;
  stepperStyle?: {
    anchorOrigin?:
      | string
      | Partial<Record<'vertical' | 'horizontal', 'top' | 'bottom' | 'center'>>
      | object;
    labelStyle?: SxProps;
    statusStyle?: SxProps;
    stepWrapStyle?: SxProps;
    iconCompletedStyle?: SxProps;
    iconActiveStyle?: SxProps;
    stepActiveStyle?: SxProps;
    stepInActiveStyle?: SxProps;
    textAreaStyle?: SxProps;
    subTitleMobStyle?: SxProps;
    titleBoxMobStyle?: SxProps;
    progressStyle?: SxProps;
    iconBackgroundStyle?: SxProps;
    iconInActiveStyle?: SxProps;
    badgeStyle?:SxProps;
    
  };
}

export interface CustomStepperProps {
  steps: StepData[];
  styles?: {
    buttonsContainer?: SxProps;
    btnStyle?: SxProps;
    rootStyle?: SxProps;
    contentStyle?: SxProps;
    stepperParent?: SxProps;
  };
  buttons?: ButtonProps[];
  resetBtn?: ButtonProps[];
  activeStep?: number;
}
export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}
